import { client } from "../api";

export async function getProducts() {
  const { data } = await client("/products");

  return data;
}

export async function getProduct({ id }: { id: string }) {
  const { data } = await client(`/products/${id}`);

  return data;
}
