import { ComponentProps, Dispatch, FC, SetStateAction } from "react";

type TVariant = "primary" | "danger" | "warning";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
  user?: { name: string };
  setUser?: Dispatch<SetStateAction<{ name: string }>>;
};

const Button: FC<TButton> = ({ children, style, variant, ...rest }) => {
  return (
    <button style={{ ...style, ...variantCheck(variant) }} {...rest}>
      {children}
    </button>
  );
};

export default Button;

function variantCheck(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#00a4ff", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "black" };
  } else {
    return { backgroundColor: "#00a4ff", color: "white" };
  }
}
