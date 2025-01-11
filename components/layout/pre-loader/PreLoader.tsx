"use client";

import { useState, useEffect } from "react";
import "./pre-loader.css";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="bb-loader">
      <img src="/assets/img/logo/loader.png" alt="loader" />
      <span className="loader"></span>
    </div>
  );
};

export default PreLoader;
