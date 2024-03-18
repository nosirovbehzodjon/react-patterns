import { Fragment } from "react";
import { ActionCounter } from "@/components/ActionCounter";
import { Counter } from "@/view/Counter";
import { Form } from "@/view/Form";

export const App = () => {
  return (
    <Fragment>
      <Counter />
      <ActionCounter />
      <hr />
      <Form />
    </Fragment>
  );
};
