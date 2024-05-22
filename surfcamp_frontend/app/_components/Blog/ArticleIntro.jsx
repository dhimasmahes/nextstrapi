import { formatDate } from "@/utils/strapi.utils";

export default function ArticleIntro({ article }) {
    return (
        <div className={`article-intro ${article.whiteText ? "article-intro--white" : ""}`}>
            <div className="article-intro__background">
                <img src={article.featuredImage} alt="" />
            </div>
            <h3 className="article-intro__headline">{article.headline}</h3>
            <p className="copy-small bold">{formatDate(article.publishedAt)}</p>
            <p className="copy-small">{article.author}</p>
        </div>
    );
}

// "headline": "3 tips for a super fast takeoff",
// "author": "Mahes",
// "publishedAt": "2024-04-03T03:11:00.649Z",
// "featuredImage": "http://localhost:1337/uploads/Group_32_86778de1b3.png"