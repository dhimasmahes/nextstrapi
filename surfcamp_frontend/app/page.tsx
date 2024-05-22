import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import BlogPreview from "./_components/BlogPreview/BlogPreview";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");
  const infoBlockData = processInfoBlocks(data);

  // console.log(infoBlockData);

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  const imgSrcPath = "/assets/hero-home.png";

  return (
    <main>
      <HeroSection headline={heroHeadline} imgSrc={imgSrcPath}/>
      {infoBlockData.map((data) => 
      <InfoBlock key={data.id} data={data} />
      )}
      <BlogPreview />
    </main> 
  );
}
