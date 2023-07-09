import { useEffect, useState } from "react";
import { Container, Grid, Box, Title } from "@mantine/core";
import Product from "./Product";
import { useGetProductsQuery } from "../store/products/productsSlice";

const Products = () => {
  const fetchProducts = async () => {
    // const res = await fetch("https://fakestoreapi.com/products");
    // const prs = await res.json();
    // setProducts(prs);
  };

  const { data: productsData, error, isLoading } = useGetProductsQuery();
  console.log("data ", productsData);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container fluid>
      {" "}
      <Box sx={{ textAlign: "center", marginBottom: 8 }}>
        <Title>Products</Title>
      </Box>
      {isLoading && <Box>Loading</Box>}
      {!isLoading && !error && (
        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl="xl">
          {productsData?.map((product) => (
            <Product
              key={product.id}
              productImage={product.image}
              productDescription={product.description}
              title={product.title}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
