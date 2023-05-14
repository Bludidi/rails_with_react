import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGreeting,
  selectError,
  selectStatus,
  getGreeting,
} from './redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector(selectGreeting);
  const greetStatus = useSelector(selectStatus);
  const greetError = useSelector(selectError);

  useEffect(() => {
    if (greetStatus === 'idle') {
      dispatch(getGreeting());
    }
  }, [greetStatus, dispatch]);

  if (greetError) {
    return <div>error: {greetError.message}</div>;
  }

  return (
    <div>
      <h1>Refresh to see a random greeting</h1>
      <h2>
        Greeting displayed: [{greet.greetings.data}]
      </h2>
    </div>
  );
};

export default Greeting;
