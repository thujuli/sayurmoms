import { createClient } from "contentful";
import { resolveError } from "./error";

const createContentClient = () => {
  return createClient({
    space: "5p8snq1zoq7a",
    accessToken: "8kKhQf2Q81Ndx6gxzty-FWeTnbc498GB3cxAiedrfbY",
  });
};

const client = createContentClient();

const getEntriesByType = async (type: string) => {
  try {
    const response = await client.getEntries({ content_type: type });
    return response.items;
  } catch (error) {
    console.error(resolveError(error));
  }
};

export const getCarousel = async () => {
  try {
    const response = await getEntriesByType("carousel");
    const carousel = response?.map((item: any) => item.fields);
    return carousel;
  } catch (error) {
    console.error(resolveError(error));
  }
};

export const getBanner = async () => {
  try {
    const response = await getEntriesByType("banner");
    const banner = response?.map((item: any) => item.fields);
    return banner;
  } catch (error) {
    console.error(resolveError(error));
  }
};

export const getCategories = async () => {
  try {
    const response = await getEntriesByType("categories");
    const categories = response?.map((category) => category.fields);
    return categories;
  } catch (error) {
    console.error(resolveError(error));
  }
};

export const getProducts = async () => {
  try {
    const response = await getEntriesByType("products");
    const products = response?.map((product) => product.fields);
    return products;
  } catch (error) {
    console.error(resolveError(error));
  }
};
