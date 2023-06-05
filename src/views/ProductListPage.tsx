"use client";
import Card from "@/components/ProductCard";
import Qoutation from "@/components/Qoutation";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import products_data from "@/data/product_data.json";

export default function CategoryPage() {
  const colorModeValue = useColorModeValue("light", "dark");
  return (
    <>
      <Flex
        w={"full"}
        h={"60vh"}
        className="bg-gradient-to-r from-black bg-opacity-60 via-transparent to-transparent"
        backgroundImage={"/asserts/all_products_banner.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}></Flex>
      <Box margin={5}>
        <Wrap spacing="30px" justify="center" marginX={6}>
          {products_data?.map((product: any, index: number) => {
            return (
              <>
                <WrapItem key={index}>
                  <Center>
                    <Card
                      key={index}
                      name={product.name}
                      code={product.product_code}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      price={product.price}
                    />
                  </Center>
                </WrapItem>
              </>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
}
