import * as React from "react";
import "./style.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>();
  const [color, setColor] = React.useState<string | undefined>("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <Input name="Age" value={age} onChange={changeAge} />
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
      <label>(name)</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Select = ({ value, onChange, name }: InputType) => {
  return (
    <div className="pa-16">
      <label>(name)</label>
      <select value={value} onSelect={onChange}>
        <option value="red">Red</option>
      </select>
    </div>
  );
};
