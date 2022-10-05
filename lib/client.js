import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'hlgywz75',
    dataset: 'production',
    apiVersion: '2022-09-30',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)