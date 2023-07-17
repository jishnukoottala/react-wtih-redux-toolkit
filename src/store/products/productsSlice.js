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
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getProductsCategory: builder.query({
      query: () => `products/categories`,
    }),
    
    getProductByCategory: builder.query({
      query: (searchValue) => `products/category/${searchValue}`,
    }),
  }),
});

console.log(productsApi);

export const { useGetProductsQuery, useGetSingleProductQuery, useGetProductsCategoryQuery, useLazyGetProductByCategoryQuery } = productsApi;

