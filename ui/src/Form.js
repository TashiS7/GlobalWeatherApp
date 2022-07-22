import { useState } from "react";
import "./Styles/Form.css";

const Form = (props) => {
  const [location, setLocation] = useState("");
  const grabFromInput = (e) => {
    setLocation(e.target.value);
  };
  const sendFromClicking = (e) => {
    e.preventDefault();

    props.locationForm(location);
    setLocation("");
  };
  return (
    <form className="form">
      <label>
        <input
          className="search-box"
          onChange={grabFromInput}
          type="text"
          placeholder="Search for the city..."
        />
        <button onClick={sendFromClicking} type="submit">
          Submit
        </button>
      </label>
    </form>
  );
};

export default Form;
