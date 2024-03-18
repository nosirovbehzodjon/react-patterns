import { ComponentProps } from "react";

interface ISubOptionProps extends ComponentProps<"div"> {}

export const SubOption = (props: ISubOptionProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
