import { fetchBlogArticles } from "@/utils/strapi.utils";
import BlogPreviewItem from "./BlogPreviewItem";

export default async function BlogPreview() {
    const data = await fetchBlogArticles();
    const highlightArticle = data.find((article) => article.isHighlightArticle);
    const recentlyPublishedArticle = data
    .filter((article) => !article.isHighlightArticle)
    .slice(0, 3);

    const articlesToDisplay = [highlightArticle, ...recentlyPublishedArticle];

    console.log(articlesToDisplay);
    return (
        <div className="blog-preview">
            <h2 className="blog-preview__headline">the blog.</h2>
            <div className="blog-preview__container">
                {articlesToDisplay.map((article) => (
                    <BlogPreviewItem key={article.id} article={article}/>
                ))}
            </div>
        </div>
    );
}