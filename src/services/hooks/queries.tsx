import { getProduct, getProducts } from "../api/queries";
import { IProduct } from "../../types/server";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
};

export const useGetProduct = ({ id }: { id: string }) => {
  return useQuery<IProduct>({
    queryKey: ["getProduct"],
    queryFn: () => getProduct({ id }),
  });
};



 