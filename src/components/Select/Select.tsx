import { ComponentProps } from "react";

interface ISelectProps extends ComponentProps<"div"> {}

export const Select = (props: ISelectProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
