"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="content-wrapper text-center px-8 py-4">
      <div>
        <p>
          jfreitas.dev {year} • {""}
          <Link
            href="https://github.com/thejfreitas/jfreitas.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Handcrafted by me
          </Link>
        </p>
      </div>
    </footer>
  );
}
