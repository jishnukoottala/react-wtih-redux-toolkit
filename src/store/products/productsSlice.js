import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    // Fill in your own server starting URL here
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        console.log("HIT ONCE and called api");
        return `products`
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        console.log("HIT ONCE and called api");
        return `products/${id}`;
      },
    }),
  }),
});

console.log(productsApi);

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;

