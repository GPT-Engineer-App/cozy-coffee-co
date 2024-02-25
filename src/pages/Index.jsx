import React from "react";
import { Box, Flex, Text, Heading, Grid, GridItem, Button, Image, Container, VStack, Icon, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Roast Coffee",
    description: "A smooth, full-bodied roast with rich chocolatey notes and a hint of fruitiness.",
    price: "19.99",
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3MDg4ODE2OTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "House Blend",
    description: "A perfect balance of bold and bright, with a clean finish.",
    price: "15.99",
    image: "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBob3VzZSUyMGJsZW5kfGVufDB8fHx8MTcwODg4MTY5OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Espresso Roast",
    description: "Dark, rich, and velvety. Perfect for espresso-based drinks.",
    price: "22.99",
    image: "https://images.unsplash.com/photo-1516832779604-54bee05bbc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHJvYXN0fGVufDB8fHx8MTcwODg4MTY5OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // More products...
];

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Image src={product.image} alt={product.name} borderRadius="md" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {/* Fake Star Rating */}
          <Box color="gold" d="flex" alignItems="center" mb={2}>
            <Icon as={FaStar} />
            <Icon as={FaStar} />
            <Icon as={FaStar} />
            <Icon as={FaStar} />
            <Icon as={FaStar} />
          </Box>
        </Box>
        <Heading size="md" fontWeight="semibold" lineHeight="tight" isTruncated>
          {product.name}
        </Heading>
        <Text mt={2} fontSize="sm" color="gray.500">
          {product.description}
        </Text>
        <Flex align="center" mt={3}>
          <Text fontWeight="bold" fontSize="xl">
            ${product.price}
          </Text>
          <Spacer />
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="sm" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl">
          Coffee Shop
        </Heading>
        <Text align="center" fontSize="xl">
          Discover your perfect cup of coffee. Freshly roasted and shipped to your door.
        </Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
          {products.map((product) => (
            <GridItem key={product.id}>
              <ProductCard product={product} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
