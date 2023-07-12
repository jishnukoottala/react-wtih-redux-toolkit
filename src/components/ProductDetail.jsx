import React from 'react'
import { Container, Grid, Title, Image, Text } from "@mantine/core";
import { useParams } from "react-router"
import { useGetProductQuery } from '../store/products/productsSlice';
const ProductDetail = () => {
  const {id}=useParams()
  console.log(id);
  const { data: productData, error, isLoading } = useGetProductQuery(1);
  console.log(productData);
  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={6}>
          <Image src={productData.image} height={'auto'} width={'80%'} alt="ProductImage" />
        </Grid.Col>
        <Grid.Col span={6}>
            <Title>{productData.title}</Title>
            
            <Text fz="xl">$ {productData.price}</Text>
            <Text fz='md'>{productData.description}</Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
