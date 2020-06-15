import React, { useReducer } from "react";
import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstname: "",
      email: ""
    }
  );

  const handleChange = evt => {
    const { name, value } = evt.target;

    setUserInput({ [name]: value });
  };

  const handleSubmit = event => {
    alert(JSON.stringify(userInput));
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Subscribe</legend>
        <div>
          <div>
            <label htmlFor="firstname1">Name: </label>
            <input
              type="text"
              id="firstname1"
              name="firstname"
              value={userInput.firstName}
              onChange={handleChange}
            />
          </div>

          <br />

          <div>
            <label htmlFor="Email1">Email: </label>
            <input
              type="text"
              id="Email1"
              name="email"
              value={userInput.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </fieldset>
    </form>
  );
}
