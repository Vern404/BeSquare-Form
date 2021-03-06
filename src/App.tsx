import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("");
  const [gender, setGender] = React.useState<string | undefined>("male");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, gender, color);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <Input name="Age" value={age} onChange={changeAge} />
        <div className="gender">
          <input
            name="gender"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={changeGender}
          />
          <label className="gender"> Male</label>
          <input
            name="gender"
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={changeGender}
          />
          <label className="gender"> Female</label>
        </div>
        <Select name="Favourite Color" value={color} onChange={changeColor} />
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
