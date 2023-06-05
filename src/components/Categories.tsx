import { Category, CAT_ITEMS as categories } from "@/data/CategoryItems";
import Card from "./Card";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

export default function Example() {
  return (
    <Box margin={10}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        textAlign={"center"}
        paddingY={10}
        fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}>
        <Text as={"span"} color={"red.400"}>
          Our Product Range
        </Text>
      </Heading>

      <Wrap spacing="30px" justify="center" marginX={10}>
        {categories.map((category, index) => {
          return (
            <>
              <WrapItem>
                <Center>
                  <Card
                    key={index}
                    name={category.name}
                    code={category.code}
                    src={category.imageSrc}
                    alt={category.imageAlt}
                  />
                </Center>
              </WrapItem>
            </>
          );
        })}
      </Wrap>
    </Box>
  );
}
