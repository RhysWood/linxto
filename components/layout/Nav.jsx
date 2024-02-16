"use client";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-between w-full mb-2 pt-3 relative">
      <Link href="/" className="flex gap-2">
        <Image
          src="/assets/linxlogo.svg"
          alt="linx logo"
          layout="fill"
          objectFit="contain"
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
