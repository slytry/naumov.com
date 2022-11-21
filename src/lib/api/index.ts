import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "types/products.type";
import { genericResponse } from "types/response.type";
import { queryKeys } from "./query-keys";

export const getProducts = async () => {
	const { data } = await axios.get<genericResponse<IProduct>>('https://dummyjson.com/products?limit=10');
	return data;
}

export const useProducts = () => {
	return useQuery([queryKeys.prod], getProducts);
}


export const getQuotes = async () => {
	const { data } = await axios.get('https://dummyjson.com/quotes?limit=3&skip=14');
	return data;
}


export const useQuotes = () => {
	return useQuery([queryKeys.quote], getQuotes);
}
