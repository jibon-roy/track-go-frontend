// import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="text-2xl md:text-3xl text-primary font-bold">
        FastParcel
      </Link>
    </div>
  );
};

export default Logo;
