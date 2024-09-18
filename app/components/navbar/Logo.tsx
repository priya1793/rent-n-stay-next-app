"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h2
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer text-cyan-500 md:text-2xl lg:text-2xl sm:text-lg font-bold"
    >
      Rent & Stay
    </h2>
  );
};

export default Logo;
