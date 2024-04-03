import { getBanner, getCategories, getProducts } from "./contentful";
import { resolveError } from "./error";

export const fetchCategories = async () => {
  try {
    const response = await getCategories();
    if (response) {
      const newResponse = response.map((category: any) => {
        return {
          title: category.title,
          description: category.description,
          link: category.link,
          imageUrl: "https:" + category.image.fields.file.url,
        };
      });

      return newResponse;
    }
  } catch (error) {
    console.error(resolveError(error));
  }
};

export const fetchProducts = async () => {
  try {
    const response = await getProducts();
    if (response) {
      const newResponse = response.map((product: any) => {
        return {
          title: product.title,
          imageUrl: "https:" + product.image.fields.file.url,
          price: product.price,
          sold: product.sold,
          rating: product.rating,
          discount: product.discount,
          category: product.category.fields.title,
          link: product.link,
        };
      });

      return newResponse;
    }
  } catch (error) {
    console.error(resolveError(error));
  }
};

export const fetchBanner = async () => {
  try {
    const response: any[] | undefined = await getBanner();
    if (response) {
      const { title, link, image } = response[0];
      return {
        title,
        link,
        imageUrl: "https:" + image.fields.file.url,
      };
    }
  } catch (error) {
    console.error(resolveError(error));
  }
};
