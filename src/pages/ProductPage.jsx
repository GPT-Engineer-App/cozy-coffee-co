import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Heading, Flex, Spacer } from "@chakra-ui/react";

const products = [
  // ... (other products)
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

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <Box p={6}>
      {product && (
        <>
          <Flex align="center" mb={4}>
            <Heading size="xl">{product.name}</Heading>
            <Spacer />
            <Text fontWeight="bold" fontSize="2xl">
              ${product.price}
            </Text>
          </Flex>
          <Image src={product.image} alt={product.name} mb={4} borderRadius="md" />
          <Text fontSize="lg">{product.description}</Text>
        </>
      )}
      {!product && <Text fontSize="lg">Product not found.</Text>}
    </Box>
  );
};

export default ProductPage;
