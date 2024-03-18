import React, {
  ComponentProps,
  cloneElement,
  isValidElement,
  useState,
} from "react";
import styles from "@/components/Select/Select.module.scss";
import { Header } from "@/components/Select/Header";

interface ISelectProps extends ComponentProps<"div"> {
  placeholder?: string;
}

export const Select = (props: ISelectProps) => {
  const { children, placeholder, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);

  //toggle
  const handelToggle = () => {
    setIsOpen(!isOpen);
  };

  React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      console.log(typeof child.props.children === "string");
    }
  });
  return (
    <div {...rest} className={styles.select} onClick={handelToggle}>
      {placeholder && placeholder}
      {isOpen && (
        <div className={styles.collapse}>
          {React.Children.map(children, (child) => {
            if (isValidElement(child) && child.type === Header) {
              const newChild = cloneElement(child);
              return newChild;
            }
          })}
        </div>
      )}
    </div>
  );
};
