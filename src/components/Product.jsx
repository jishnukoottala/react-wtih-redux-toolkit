import React from "react";
import { Grid, Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Product = ({ id, productImage, title, productDescription }) => {
  const navigate=useNavigate()
  return (
    <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section className="productImage" onClick={()=>navigate(`/product/${id}`)}>
          <Image src={productImage} height={'400px'} width={'300px'} alt="ProductImage" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}  sx={{
            textOverflow: "ellipsis",
            width:'270px',
            height:'100px'
          }}>{title}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text
          size="sm"
          color="dimmed"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            lineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {productDescription}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Add to Cart
        </Button>
      </Card>
    </Grid.Col>
  );
};

export default Product;
