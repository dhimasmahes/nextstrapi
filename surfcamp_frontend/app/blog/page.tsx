import HighlightArticle from '../_components/Blog/HighlightArticle';
import SubscribeNewsletter from '../_components/Blog/SubscribeNewsletter';
import FeaturedItems from '../_components/FeaturedItems/FeaturedItems'

export default function Page() {
  const highlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (<>Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style.

      Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, you'll see progress and have more enjoyable rides. Here is how:
    </>),
    slug: "takeoff",
    featuredImage: "/assets/hero-experience.png"
  }

  const featuredArticles = [
    {
      headline: "surfboard shaping asdasdasdasdasd and design behind the scenes of crafting the perfect board",
      date: "Monday, June 05, 2023",
      slug: "/blog/???",
      featuredImage: "/assets/hero-experience.png"
    },
    {
      headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
      date: "Monday, June 05, 2023",
      slug: "/blog/???",
      featuredImage: "/assets/hero-experience.png"
    },
    {
      headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
      date: "Monday, June 05, 2023",
      slug: "/blog/???",
      featuredImage: "/assets/hero-experience.png"
    },
    {
      headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
      date: "Monday, June 05, 2023",
      slug: "/blog/???",
      featuredImage: "/assets/hero-experience.png"
    },
    {
      headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
      date: "Monday, June 05, 2023",
      slug: "/blog/???",
      featuredImage: "/assets/hero-experience.png"
    },
    {
      headline: "surfboard shaping and design behind the scenes of crafting the perfect board",
      date: "Monday, June 05, 2023",
      slug: "/blog/???",
      featuredImage: "/assets/hero-experience.png"
    },
  ]

  return (
    <main className='blog-page'>
      <HighlightArticle data={highlightArticleData} ></HighlightArticle>
      <SubscribeNewsletter/>
      <FeaturedItems items={featuredArticles} />
    </main>
  );
}