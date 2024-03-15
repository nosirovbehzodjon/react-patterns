export const Body = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
