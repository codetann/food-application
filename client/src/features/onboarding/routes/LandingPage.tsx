import { VStack, Box, HStack } from "@chakra-ui/react";
import { Page, Button } from "@components";
import { InfoSlides } from "../components";

/* data */
const slides = [
  {
    image: "https://www.svgrepo.com/show/251617/food-truck.svg",
    title: "Discover places to eat near you",
    description:
      "Can't decide where to eat? Join with friends and find the best places to eat near you.",
  },
  {
    image: "https://www.svgrepo.com/show/251618/restaurant-wine.svg",
    title: "Swipe through restaurants",
    description:
      "Swipe through restaurants like Tinder to find your next food love",
  },
];

type Props = {};

function LandingPage({}: Props) {
  return (
    <Page bg="brand.darkPurple">
      <InfoSlides slides={slides} />
      <Box pt="3rem" />
      <VStack maxW="xs" w="100%">
        <Button onClick={() => null} _hover={{ opacity: 0.7 }}>
          Create Game
        </Button>
        <Button variant="ghost" onClick={() => null}>
          Join Friends
        </Button>
      </VStack>
    </Page>
  );
}

export { LandingPage };
