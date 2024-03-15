export const Header = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
