import { Button as CButton } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode | string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFullWidth?: boolean;
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
  isFullWidth,
  variant = "default",
}: Props) {
  return (
    <CButton
      onClick={onClick}
      width="100%"
      rounded="3xl"
      height="3rem"
      {...styles[variant]}
    >
      {children}
    </CButton>
  );
}

export { Button };
