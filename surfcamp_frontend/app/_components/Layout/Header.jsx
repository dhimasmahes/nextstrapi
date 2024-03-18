import Link from "next/link";

export default function Header() {
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
    <header className="header">
      <img className="header__logo" src="/assets/logo.svg" alt="Logo" width="55" height="77"/>
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}><h4>{item.display}</h4></Link>
          </li>
        ))}
      </ul>
      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
}