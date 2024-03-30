import Link from "next/link";

export default function FeaturedArticle({ article }) {
	return (
		<Link href={`/blog/${article.slug}`} className="featured-items__article">
			<div className="featured-items__article-img">
				<img
					src={article.featuredImage}
					alt={`Go read article ${article.headline}`}
					className=""
				/>
				<div className="featured-items__article-text">
					<h5>{article.headline}</h5>
					<p className="copy-small">{article.date}</p>
				</div>
			</div>
		</Link>
	);
}