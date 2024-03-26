import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337/api";

export async function fetchDataFromStrapi(route) {
    const url = `${BASE_URL}/${route}`;

    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (err) {
        console.log(err);
        throw new Error(`Could not fetch data from ${url}`);
    }
}

export function processInfoBlocks(data) {
    const infoBlocksRaw = data.attributes.info_blocks.data;
    return infoBlocksRaw.map((infoBlock) => ({
        ...infoBlock,
        imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
        headline: infoBlock.attributes?.headline,
        text: infoBlock.attributes?.text,
        showImageRight: infoBlock.attributes?.showImageRight,
        id: infoBlock.id
    }));
}