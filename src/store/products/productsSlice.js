import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    // Fill in your own server starting URL here
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});



export const { useGetProductsQuery, useGetProductQuery } = productsApi;

