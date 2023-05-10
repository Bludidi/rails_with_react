import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomGreeting } from '../redux/greetings/greetings'

const Greeting = () => {
  const dispatch = useDispatch();
  let greetingArray = [];
  const greeting = useSelector((state) => state.greetingText.greeting);
  greetingArray.push(greeting)
  console.log(greetingArray);
  useEffect(() => {
    dispatch(randomGreeting());
  }, [dispatch]);

  return (

    <>
      {greetingArray.map((key) => (
        <div key={key.id} className='container displays'>
          <h1>{key.greeting}</h1>
        </div>
      ))}
    </>
  );
};

export default Greeting
