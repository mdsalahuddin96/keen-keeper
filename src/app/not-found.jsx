import Image from "next/image";
import Link from "next/link";
import React from "react";
import pageNotFoundImage from '@/assets/error-404.png'
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <Image
        src={pageNotFoundImage}
        alt="Page Not Found Image"
        />


        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold my-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-4">
          The page you are looking for is not available.
        </p>

        {/* Button */}
        <Link
          href={"/"}
          className="inline-block bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
