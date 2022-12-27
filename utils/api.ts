import axios from "axios";
import { Category, Product } from "./types";
import { API_BASE_URL } from "./constants";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};

export const getSingleProduct = async (productId: number): Promise<Product> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/categories`);
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};

export const getProductsInCategory = async (
  category: Category
): Promise<Product[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/category/${category}`
    );
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};
