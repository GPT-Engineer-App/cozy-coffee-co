import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image, Button, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";

const ProductPage = () => {
  const { id } = useParams();
  const { cartItems, addToCart } = useContext(CartContext);
  const product = cartItems.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  return (
    <Container maxW="container.md" py={10}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Image src={product.image} alt={product.name} borderRadius="md" />
        <Box p="6">
          <Heading size="xl" fontWeight="bold" lineHeight="tight">
            {product.name}
          </Heading>
          <Text mt={2} fontSize="lg">
            {product.description}
          </Text>
          <Text fontWeight="bold" fontSize="2xl" mt={3}>
            ${product.price}
          </Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="lg" onClick={() => addToCart(product)} mt={4}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
