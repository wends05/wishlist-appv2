import type { ICategory } from "@repo/common/schemas";
import { CategoryModel } from "@/models/category.ts";

export const getAllCategories = async () => {
  return CategoryModel.find({});
};

export const createCategory = async (data: ICategory) => {
  return CategoryModel.create({
    name: data.name,
    description: data.description,
  });
};
