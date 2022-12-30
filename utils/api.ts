import axios from "axios";
import { Category, Product, User } from "./types";
import { API_BASE_URL } from "./constants";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};

export const getSingleProduct = async (productId: number): Promise<Product> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/categories`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
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
      `${API_BASE_URL}/products/category/${category}`,
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    );
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    const data = response.data;
    return data;
  } catch {
    throw "Error al llamar al servicio";
  }
};
