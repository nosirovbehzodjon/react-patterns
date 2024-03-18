import { ComponentProps } from "react";

interface IOptionProps extends ComponentProps<"div"> {
  value: string;
}

export const Option = (props: IOptionProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
