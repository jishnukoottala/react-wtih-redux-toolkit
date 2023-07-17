import { useEffect, useState, forwardRef } from "react";
import { Container, Grid, Box, Title, Select } from "@mantine/core";
import Product from "./Product";
import {
  useGetProductsQuery,
  useGetProductsCategoryQuery,
  useLazyGetProductByCategoryQuery,
} from "../store/products/productsSlice";

const Products = () => {
  const [searchValue, onSearchChange] = useState("");
  const [products, setProducts] = useState([]);
  

  const {
    data: categoryData = [],
    error: errorCategory=false,
    isLoading: isLoadingCategory=true,
  } = useGetProductsCategoryQuery();

  const { data: productsData, error, isLoading } = useGetProductsQuery();
  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);
  console.log("data ", productsData);

  const [
    getProductCategory,
    {
      data: categoryProduct = [],
      error: errorProductCategory=false,
      isLoading: isLoadingProductCategory=false,
    },
  ] = useLazyGetProductByCategoryQuery("electronics");

  
useEffect(()=>{
  if(categoryProduct!==[]&&searchValue!==""){
    setProducts(categoryProduct)
  }
},[categoryProduct])

useEffect(()=>{
  getProductCategory();
},[])
    
  

  return (
    <Container fluid>
      {" "}
      {!isLoadingCategory && !errorCategory && (
        <Box>
          <Select
            label="Choose a Category..."
            placeholder="Pick one"
            searchable
            onChange={(e)=>{
              onSearchChange(e);
              
              

            }}
            searchValue={searchValue}
            nothingFound="No options"
            data={categoryData}
            
          />
        </Box>
      )}
      <Box sx={{ textAlign: "center", marginBottom: 8 }}>
        <Title>Products</Title>
      </Box>
      {isLoading && <Box>Loading</Box>}
      {!isLoading && !error && (
        <>
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl="xl">
            {products?.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                productImage={product.image}
                productDescription={product.description}
                title={product.title}
              />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Products;
