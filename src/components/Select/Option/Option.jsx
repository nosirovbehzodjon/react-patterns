export const Option = (props) => {
  const { children, value, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
