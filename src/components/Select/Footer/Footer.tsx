import { ComponentProps } from "react";

interface IFooterProps extends ComponentProps<"div"> {}

export const Footer = (props: IFooterProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
