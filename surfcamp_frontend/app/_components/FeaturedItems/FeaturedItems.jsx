import FeaturedArticle from "./FeaturedArticle";

export default function FeaturedItems({ headline, items }) {
	return (
		<section className="featured-items">
			<h3 className="featured-items__headline">
				{headline || "Our featured articles"}
			</h3>
			<div className="featured-items__container">
				{items.map((item) => (
					<FeaturedArticle key={item.slug} article={item} />
				))}
			</div>
            <button className="btn btn--medium btn--turquoise">See More</button>
		</section>
	);
}
