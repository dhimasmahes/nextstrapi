import HighlightArticle from '../_components/Blog/HighlightArticle';
import SubscribeNewsletter from '../_components/Blog/SubscribeNewsletter';
import FeaturedItems from '../_components/FeaturedItems/FeaturedItems'
import { fetchBlogArticles, fetchDataFromStrapi } from '@/utils/strapi.utils';

export default async function Page() {
  const data = await fetchBlogArticles();

  const highlightArticleData = data.find(
      (article) => article.isHighlightArticle
    );

  // write different queries first one to find the highlight blog article
  

  const featuredArticles = data.filter (
    (article) => !article.isHighlightArticle
  );
  // find the articles that are not highlight blog article but sorted by published date


  return (
    <main className='blog-page'>
      <HighlightArticle data={highlightArticleData} ></HighlightArticle>
      <SubscribeNewsletter/>
      <FeaturedItems items={featuredArticles} />
    </main>
  );
}

export const revalidate = 300;