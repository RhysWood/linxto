'use client'
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full mb-2 pt-3 relative">
      <Link href="/" className='flex gap-2'>
          <Image
            src="/assets/linxto_logo.png"
            alt="linx logo"
            width={150} 
            height={150} 
            className="object-contain"
          />
      </Link>
      <div className="flex gap-4 mr-16">
        <Link href="/about" className="">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;