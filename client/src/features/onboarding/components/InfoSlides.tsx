import {
  Heading,
  VStack,
  Text,
  Image,
  HStack,
  Center,
  Box,
} from "@chakra-ui/react";
import { useSlideTransition } from "@hooks";
import { AnimatePresence, motion } from "framer-motion";

/* types */
type InfoSlideProps = {
  image: string;
  title: string;
  description: string;
};

function InfoSlide({ image, title, description }: InfoSlideProps) {
  return (
    <VStack
      maxW="xl"
      w="100%"
      justify="center"
      align="center"
      textAlign="center"
    >
      <Image width="100%" maxW={["12rem"]} src={image} alt={title} pb="1rem" />
      <Heading>{title}</Heading>
      <Text color="whiteAlpha.700">{description}</Text>
    </VStack>
  );
}

function InfoSlides({ slides }: { slides: InfoSlideProps[] }) {
  const slideIndex = useSlideTransition(slides.length, 7000);

  return (
    <Box h="300px">
      {slides.map((slide, index) => (
        <AnimatePresence>
          <HStack w="100%" justify="center" align="center">
            {slideIndex === index && (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.div layoutId={index.toString()}>
                  <InfoSlide key={index} {...slide} />
                </motion.div>
              </motion.div>
            )}
          </HStack>
        </AnimatePresence>
      ))}
    </Box>
  );
}

export { InfoSlides };
