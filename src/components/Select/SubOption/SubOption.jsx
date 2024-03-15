export const SubOption = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
