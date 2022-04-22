import { VStack, Box } from "@chakra-ui/react";

type Props = {
  children: JSX.Element | JSX.Element[];
  bg?: string;
};

function Page({ children, bg }: Props) {
  return (
    <VStack
      as="main"
      width="100%"
      maxWidth="100vw"
      height="100vh"
      justify="center"
      bg={bg ?? "white"}
      p={8}
    >
      <VStack justify="start" align="center" maxW="5xl" w="100%">
        {children}
      </VStack>
    </VStack>
  );
}

export { Page };
