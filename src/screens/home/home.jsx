import "./home.scss";
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import {
  Button,
  Icon,
  Flag,
  Container,
  Segment,
  Label,
  Input,
} from "semantic-ui-react";
function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSelectChange = (e) => {
    setCourse(e.target.value);
  };
  const onSubmit = () => {
    console.log(name, phone, gender, course);
  };

  return (
    <Container>
      <Segment Container>
        <Navbar />
        <h1>DANG KY KHOA HOC</h1>
        <div className="form-register">
          <label>Name</label>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={onChangeName}
          />
          {/* <input type="text" placeholder="Name" value={name} onChange={(e) => onChange(e.target.value)} /> */}
          <br />
          <label>Phone</label>
          <Input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={onChangePhone}
          />
          <br />
          <label>Gender</label>
          <br />
          <Input
            type="radio"
            name="gender"
            value="male"
            onChange={() => {
              setGender("male");
            }}
          />
          <label>Male</label>
          <Input
            type="radio"
            name="gender"
            value="female"
            className="gender"
            onChange={() => {
              setGender("female");
            }}
          />
          <label>Female</label>
          <br />
          <label>Course</label>
          <select
            value={course}
            onChange={handleSelectChange}
            className="courses"
          >
            <option value="" selected>
              {" "}
              -- Select a course --{" "}
            </option>
            <option value="ReactJs">ReactJs</option>
            <option value="React Native">React Native</option>
            <option value="NodeJs">NodeJs</option>
            <option value="VueJs">VueJs</option>
          </select>
          <br />
          <Button className="btn-click" onClick={onSubmit}>
            Show data
          </Button>
        </div>

        <Button color="youtube">
          <Icon name="youtube" /> YouTube{" "}
        </Button>
        <Flag name="vn" />
        <Button as="div" labelPosition="right">
          <Button color="red">
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            2,048
          </Label>
        </Button>
      </Segment>
    </Container>
  );
}

export default Home;
