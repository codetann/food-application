import { Button as CButton } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode | string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  width?: string;
  variant?: "default" | "outline" | "ghost";
};

const styles = {
  default: {
    bg: "brand.orange",
    color: "white",
  },
  outline: {
    bg: "transparent",
    color: "brand.orange",
    border: "1px solid",
    borderColor: "brand.orange",
  },
  ghost: {
    bg: "whiteAlpha.100",
    color: "white",
    border: "1px solid",
    borderColor: "transparent",
  },
};

function Button({
  children,
  onClick,
  isDisabled,
  isLoading,
  width = "100%",
  variant = "default",
}: Props) {
  return (
    <CButton
      isDisabled={isDisabled}
      onClick={onClick}
      _hover={isDisabled ? {} : { opacity: 0.6 }}
      width={width}
      rounded="3xl"
      height="3rem"
      {...styles[variant]}
    >
      {children}
    </CButton>
  );
}

export { Button };
