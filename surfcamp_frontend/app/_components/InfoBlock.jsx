'use client';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function InfoBlock({ data }) {
    // console.log(data.button);
    const {headline, text, showImageRight, imageSrc, button} = data;
    return (
        <div className={`info ${showImageRight ? "info--reversed" : ""}`}>
            <img 
                className="info__image" 
                src={ imageSrc || "/info-blocks/rectangle.png"} 
                alt="" 
            />
            <div className="info__text">
                <h2 className="info__headline">{headline}</h2>
                <BlocksRenderer
                 content={text}
                 blocks={{ paragraph: ({ children }) => <p className="copy">{children}</p>}}
                 />
                 {button}
            </div>
        </div>
    );
}