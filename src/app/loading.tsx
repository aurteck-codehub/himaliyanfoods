import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Image
        src="/asserts/loading.png"
        alt="loading data"
        height={200}
        width={200}
      />
    </>
  );
}
