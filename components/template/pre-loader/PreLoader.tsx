"use client";

import { useLoading } from "@/context/LoadingContext";
import "./pre-loader.css";

const PreLoader = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="bb-loader">
      <img src="/assets/img/logo/loader.png" alt="loader" />
      <span className="loader"></span>
    </div>
  );
};

export default PreLoader;
