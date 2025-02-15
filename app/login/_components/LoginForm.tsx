"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Button,
  Input,
  Label,
  FieldError,
} from "@/components/base";

import { useLoading } from "@/context/LoadingContext";
import { loginSchema } from "@/schemas/auth";
import { AuthState } from "@/types/auth";
import { mutation } from "@/utils/fetcher";
import { ResponseApi } from "@/types/response";


const LoginForm = () => {
  const router = useRouter();
  const { showLoader, hideLoader, loading } = useLoading();

  const [errors, setErrors] = useState<AuthState>({
    message: { email: [], password: [] },
  });
  const formRef = useRef<HTMLFormElement>(null);

  const clearErrors = () => setErrors({ message: { email: [], password: [] } });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const validatedFields = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      const { fieldErrors } = validatedFields.error.flatten();
      setErrors({
        message: {
          email: fieldErrors.email ?? [],
          password: fieldErrors.password ?? [],
        },
      });
      return;
    }

    showLoader();
    try {
      const apiResponse: ResponseApi<{ accessToken: string }> = await mutation(
        "/api/login",
        validatedFields.data,
        "POST"
      );
      clearErrors();

      if (apiResponse.meta.errors) {
        return toast.error(apiResponse.meta.message);
      }
      
      const token = apiResponse.data?.accessToken;
      if (token) {
        localStorage.setItem("_bbr_tk", token);
      }

      formRef.current?.reset();
      toast.success(apiResponse.meta.message);
      router.push(
        `${process.env.NEXT_PUBLIC_BASE_URL}//`
      );
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      hideLoader();
    }
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="bb-login-wrap">
        <Label label={"Email*"}>
          <Input name="email" type="email" placeholder="Enter Your Email" />
        </Label>
        <FieldError message={errors.message.email} />
      </div>
      <div className="bb-login-wrap">
        <Label label={"Password*"}>
          <Input
            name="password"
            type="password"
            placeholder="Enter Your Password"
          />
        </Label>
        <FieldError message={errors.message.password} />
      </div>
      <div className="bb-login-wrap">
        <a href="javascript:void(0)">Forgot Password?</a>
      </div>
      <div className="bb-login-button">
        <Button disabled={loading}>Login</Button>
        <Link href="register">Register</Link>
      </div>
    </form>
  );
};

export default LoginForm;
