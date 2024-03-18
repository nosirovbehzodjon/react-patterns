import { Select } from "@/components/Select";
import { Body } from "@/components/Select/Body";
import { Footer } from "@/components/Select/Footer";
import { Header } from "@/components/Select/Header";
import { Option } from "@/components/Select/Option";

export const Form = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Select placeholder="Select Component...">
        <Header>Users list...</Header>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Body>
          <span>There is a badge or something else...</span>
        </Body>
        <Option value="3">3</Option>
        <Footer>All rights reserved.</Footer>
      </Select>
    </div>
  );
};
