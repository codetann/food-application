import { Page, Button } from "@components";
import {
  Box,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type PinInputProps = {
  value: string;
  onChange: (pin: string) => void;
};

const PinInputs = ({ value, onChange }: PinInputProps) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <HStack>
      <PinInput value={value} type="alphanumeric" onChange={handleChange}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

function JoinPage() {
  const [pin, setPin] = useState("");

  return (
    <Page bg="brand.darkPurple">
      <Heading>Enter Room Code</Heading>
      <Text color="whiteAlpha.500">Write some text here about the code.</Text>
      <Box h="4rem" />

      <PinInputs value={pin} onChange={setPin} />
      <Box h="6rem" />
      <Button
        isDisabled={pin.length < 4}
        width="sm"
        onClick={() => console.log("hi")}
      >
        Join
      </Button>
    </Page>
  );
}

export { JoinPage };
