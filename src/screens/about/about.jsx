import "./about.scss";
import Navbar from "../../components/navbar/navbar";
import { useHistory } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Segment,
  Container,
} from "semantic-ui-react";
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

function About() {
  const history = useHistory();

  const onMove = () => {
    history.push("/contact");
  };

  return (
    <Container>
      <Navbar />
      <h1>ABout screen</h1>
      <button className="btn" onClick={onMove}>
        Move to Contact
      </button>
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group inline>
            <label>Quantity</label>
            <Form.Field
              control={Radio}
              label="One"
              // value='1'
              // checked={value === '1'}
              // onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label="Two"
              // value='2'
              // checked={value === '2'}
              // onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label="Three"
              // value='3'
              // checked={value === '3'}
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Segment>
    </Container>
  );
}

export default About;
