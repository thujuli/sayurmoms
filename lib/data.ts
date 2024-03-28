import { getCategories } from "./contentful";
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
          imgUrl: "https:" + category.image.fields.file.url,
        };
      });

      return newResponse;
    }
  } catch (error) {
    console.error(resolveError(error));
  }
};
