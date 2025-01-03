"use client";

import { useState, FormEvent, ChangeEvent, useRef, ElementRef } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";

import styles from "./contact.module.css";

import { emailPattern } from "@/constants/pattern";
import { debounce } from "@/utils/debounce";
import { InputBase, TextareaBase } from "@/components/base";

export default function Contact() {
  const t = useTranslations();
  const formRef = useRef<ElementRef<"form">>(null);

  const [forms, setForms] = useState({
    name: "",
    email: "",
    message: "",
  });

  type FormFieldErrors = {
    name?: string;
    email?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<FormFieldErrors>({});

  const checkValidationContactForm = (): boolean => {
    const newErrors: FormFieldErrors = {};

    // Check if the name does not exceed 50 characters
    if (forms.name.length > 50) {
      newErrors.name = t("Validation.maximum", { num: 50 });
    }

    // Validate email: it should not be empty and must follow a valid format
    if (!forms.email.trim()) {
      newErrors.email = t("Validation.required", { field: "email" });
    } else if (!emailPattern.test(forms.email)) {
      newErrors.email = t("Validation.email_pattern");
    }

    // Check if the message does not exceed 200 characters
    if (forms.message.length > 200) {
      newErrors.message = t("Validation.maximum", { num: 200 });
    }

    // Update the errors state if there are any errors
    setErrors(newErrors);

    // Return true if no errors, false if any errors found
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value }); // Update the forms state
  };

  const debouncedInputChange = debounce(handleInputChange, 500);

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();

    const isFormValid = checkValidationContactForm();

    if (isFormValid) {
      toast.success(t("HomePage.contact.contact_successfully"));
      formRef.current?.reset();
      setForms({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error(t("HomePage.contact.contact_failed"));
    }
  };

  return (
    <div>contact</div>
  );
}
