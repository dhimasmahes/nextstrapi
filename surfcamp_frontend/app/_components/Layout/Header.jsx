"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const navItems = [
    {
      display: "the camp.",
      slug: "/"
    },
    {
      display: "the experience.",
      slug: "/experience"
    },
    {
      display: "the blog.",
      slug: "/blog"
    }
  ]
  return (
    <header 
    // className={`header ${path === "/experience" ? "header--light" : ""}`
    className={`header ${path === "/experience" && "header--light"}`
    }>
      <img className="header__logo" src="/assets/logo.svg" alt="Logo" width="55" height="77"/>
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}><h4>{item.display}</h4></Link>
          </li>
        ))}
      </ul>
      <button className="btn btn--black btn--small">
        <Link href="/events">BOOK NOW</Link>
      </button>
    </header>
  );
}