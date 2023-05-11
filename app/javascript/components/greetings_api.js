import { useState } from 'react';
import axios from 'axios';

const Greetings = () => {
  const [message, setMessage] = useState("");

  const url = 'https://127.0.0.1:3000/api/v1/greetings/random';

  const getGreeting = async () => {
    const response = await axios.get(url);
    const data = response.json();
    setMessage(data.message);
};

return (
  <div>
    <h1>Random Greeting:</h1>
    <p>{message}</p>
    <button onClick={getGreeting}>Get a new greeting</button>
  </div>
);
}

export default Greetings;