"use client";

import Link from "next/link";

export default function Backtoartical() {
  return (
    <>
      <p className="text-sm underline text-purple-600 cursor-pointer">
        <Link href="/">Go back to main page</Link>
      </p>
    </>
  );
}
