import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils"

export default async function Page({ params }) {
    const {article: slug} = params;

    const articles = await fetchBlogArticles();

    const article = articles.find((article) => article.slug === slug);



    return (
        <main>
            <h1>{article.headline}</h1>
        </main>
    );
}

export async function generateStaticParams() {
    const articles = await fetchDataFromStrapi("blog-articles");

    return articles.map((article) => ({
        article: article.attributes.slug,
    }))
}