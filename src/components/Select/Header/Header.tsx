import { ComponentProps } from "react";

interface IHeaderProps extends ComponentProps<"div"> {}

export const Header = (props: IHeaderProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
