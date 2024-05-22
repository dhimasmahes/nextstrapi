import { extractImageUrl } from "@/utils/strapi.utils";


export default function ArticleImage({ imageData }) {
    const { image, imageCaption } = imageData;
    return (
        <div className="article-image">
            <img src={extractImageUrl(image)} alt={imageCaption} />
            {
                imageCaption && (
                    <p className="article-text-image__caption copy-small">
                        {imageCaption}
                    </p>
                )
            }
        </div>

    );
}