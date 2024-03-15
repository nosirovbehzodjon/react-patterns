export const Select = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
