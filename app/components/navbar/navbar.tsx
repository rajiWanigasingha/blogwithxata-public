"use client";

import { FaBloggerB } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter()

  return (
    <>
      <div className="w-screen p-2 flex flex-row justify-between">
        <div className="flex flex-row p-2 gap-3 items-center cursor-pointer" onClick={() => router.push('/')}>
          <FaBloggerB />
          <h1 className="lg:text-lg md:text-base text-sm text text-white font-semibold">
            MyCodeJuerny
          </h1>
        </div>
        <div className="flex items-center mr-3 gap-3">
          <Link href='/creator' className="text-purple-600 text-sm">Creator</Link>
          <Link href='/login' className="text-green-600 text-sm">Login</Link>
        </div>
      </div>
      <hr className="divide-solid"></hr>
    </>
  );
}
