"use client";
import { extractImageUrl } from "@/utils/strapi.utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ImageTextComponent({ component }) {
    const { paragraph, imageCaption, image, isLandscape, imageShowsRight } = component;
    return (
        <div className={`article-text-image ${isLandscape ? "" : "article-text-image--portrait"} ${imageShowsRight ? "" : "article-text-image--reversed"}`}>
            <div className="article-text-image__text">
                <BlocksRenderer
                    content={paragraph}
                    blocks={
                        {
                            paragraph: ({ children }) => <p className="copy article-paragraph">{children}</p>,
                            list: ({ children }) => <ul className="copy article-list">{children}</ul>
                        }}
                />
            </div>
            <div className="article-text-image__container">
                <div className="article-text-image__image">
                    <img src={extractImageUrl(image)} alt={imageCaption} />
                </div>
                {
                    imageCaption && (
                        <p className="article-text-image__caption copy-small">
                            {imageCaption}
                        </p>
                    )
                }
            </div>
        </div>
    );
}