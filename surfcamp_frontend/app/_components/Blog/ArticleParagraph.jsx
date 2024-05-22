"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";



export default function ArticleParagraph({ paragraph }) {
    return (
        <BlocksRenderer
                    content={paragraph.paragraph}
                    blocks={
                        {
                            paragraph: ({ children }) => <p className="copy article-paragraph">{children}</p>,
                            list: ({ children }) => <ul className="copy article-list">{children}</ul>
                        }}
                />
    );
}