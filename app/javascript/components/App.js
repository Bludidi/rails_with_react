import React from "react";
import { Link } from "react-router-dom";
import Greetings from "./Greeting";

const App = () => {
  <>
    <h3>Greeting:</h3>
    <Link to='/greeting'>Greeting</Link>
  </>
}

export default App;