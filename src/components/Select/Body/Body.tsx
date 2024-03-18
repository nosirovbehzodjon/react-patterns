import { ComponentProps } from "react";

interface IBodyProps extends ComponentProps<"div"> {}

export const Body = (props: IBodyProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
