import React from "react";
import { Box, Flex, Text, Image, Button, Heading, VStack, SimpleGrid, Container } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const meals = [
  {
    id: 1,
    name: "Grilled Chicken",
    description: "With seasonal vegetables.",
    price: "15.99",
    image: 'https://images.unsplash.com/photo-1627662168781-4345690f0bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHBsYXRlfGVufDB8fHx8MTcwODcxNjQ3Nnww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Beef Steak",
    description: "Served with fries and salad.",
    price: "18.99",
    image: 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RlYWslMjBwbGF0ZXxlbnwwfHx8fDE3MDg3MTY0NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Vegetarian Pizza",
    description: "Loaded with fresh vegetables.",
    price: "12.99",
    image: 'https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emF8ZW58MHx8fHwxNzA4NzE2NDc2fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // ... other meals
];

const MealCard = ({ meal }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
    <Image src={meal.image} alt={`Image of ${meal.name}`} borderRadius="md" />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
          {meal.price} USD
        </Text>
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {meal.name}
      </Box>
      <Text mt={2} color="gray.600" fontSize="sm">
        {meal.description}
      </Text>
      <Button mt={3} colorScheme="teal" leftIcon={<FaShoppingCart />}>
        Add to Cart
      </Button>
    </Box>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex alignItems="center" justifyContent="space-between" p={4} borderBottomWidth={1}>
        <Heading as="h1" size="lg">
          Online Meal Shop
        </Heading>
        <Button colorScheme="teal" variant="solid" rightIcon={<FaShoppingCart />}>
          Cart
        </Button>
      </Flex>
      <VStack spacing={8} my={10}>
        <Heading as="h2" size="xl">
          Our Delicious Meals
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
