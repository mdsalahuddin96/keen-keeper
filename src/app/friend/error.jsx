"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import appsNotFound from "@/assets/App-Error.png";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">
      <div className="flex flex-col justify-center items-center text-center">
        <Image src={appsNotFound} alt="Page Not Found Image"></Image>

        <h2 className="text-2xl md:text-3xl font-semibold my-4">
          OPPS!! This Friend NOT FOUND
        </h2>

        <p className="text-gray-500 mb-4">
          The Friend you are requesting is not found on our system. please try
          another Friend Details.
        </p>
        <Link
          href={"/"}
          className="inline-block bg-linear-to-r from-[#0c462b] to-[#4bc24b] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;