import { Heading, VStack, Text, Image } from "@chakra-ui/react";
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
      h="300px"
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
    <VStack maxW="2xl" w="100%" overflow="hidden">
      {slides.map((slide, index) => (
        <AnimatePresence>
          {slideIndex === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.2,
              }}
            >
              <InfoSlide key={index} {...slide} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </VStack>
  );
}

export { InfoSlides };
