import React from 'react'
import { Container, Grid, Title, Image, Text,Box } from "@mantine/core";
import { useParams } from "react-router"
import { useGetSingleProductQuery } from '../store/products/productsSlice';
const ProductDetail = () => {
  const {id}=useParams()
  
  const { data: productData, error, isLoading } = useGetSingleProductQuery(id);
  
  return (
    <Container fluid>
      {isLoading && <Box>Loading</Box>}
      {!isLoading && !error && (
      <Grid>
        <Grid.Col span={6}>
          <Image src={productData.image} height={'auto'} width={'80%'} alt="ProductImage" />
        </Grid.Col>
        <Grid.Col span={6}>
            
            <Title>{productData.title}</Title>
            
            <Text fz="xl">$ {productData.price}</Text>
            <Text fz='md'>{productData.description}</Text>
        </Grid.Col>
      </Grid>)}
    </Container>
  );
};

export default ProductDetail;
