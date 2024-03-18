import Link from "next/link";

export default function HeroSection({ imgSrc, headline, theme = "turquoise" }) {
  return (
    <section className="hero">
      <div className="hero__backkground">
        <img src={imgSrc || "/assets/hero-home.png"} alt="" />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>Headline ,issing</h1>}
      </div>
      <Link href="/events">
        <button className={`btn btn--medium btn--${theme}`}>BOOK NOW</button>
      </Link>
      <img className={`hero__logo hero__logo--${theme}`} src="/assets/logo.svg" alt="" width={120} height={185}/>
    </section>
  );
}