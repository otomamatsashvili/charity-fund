import Button from 'react-bootstrap/Button';
import { getTestMessage } from 'services/backendRequests';

const Home = () => {
  const transferMoneyButtonClickHandler = async () => {
    try {
      const message = await getTestMessage()

      console.log(message)
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={transferMoneyButtonClickHandler}>Transfer money</Button>
    </div>
  );
};

export default Home;
