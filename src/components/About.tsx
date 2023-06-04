"use client";
import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      {" "}
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}>
            {/* <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            /> */}
            <Box
              position={"relative"}
              height={"400px"}
              rounded={"xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}>
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/asserts/1.jpeg"}
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
              <Text as={"span"} color={"red.400"}>
                Pure Essence
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Nature&lsquo;s Ancient Treasure Unveiled. Harvested from pristine
              depths within the majestic Himalayan Mountains, our salt embodies
              purity, rich minerals, and unrivaled flavor. Enhance your culinary
              creations, invigorate your wellness rituals, and indulge in the
              sublime essence of this timeless natural wonder. Elevate your
              experience with Himalayan Salt.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}>
             
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                //   leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
              >
                Learn More!
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default About;
