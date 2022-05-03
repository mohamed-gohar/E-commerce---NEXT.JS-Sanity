import SanityClient from "@sanity/client";
import imageURlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "2cpm72nk",
  dataset: "production",
  apiVersion: "2022-05-02",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageURlBuilder(client);

export const urlFor = (source) => builder.image(source);
