import { useEffect, useState } from "react";
import { Container, Grid, Box, Title } from "@mantine/core";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const prs = await res.json();
    setProducts(prs);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);
  return (
    <Container fluid>
      {" "}
      <Box sx={{ textAlign: "center", marginBottom: 8 }}>
        <Title>Products</Title>
      </Box>
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl="xl">
        {products?.map((product) => (
          <Product
            key={product.id}
            productImage={product.image}
            productDescription={product.description}
            title={product.title}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
