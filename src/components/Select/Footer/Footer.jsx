export const Footer = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
