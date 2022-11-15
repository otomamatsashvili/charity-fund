import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ethers } from 'ethers';
import { useState } from 'react';

const startPayment = async ({ setError, setTxs, ether }) => {
  try {
    // Check if metamask is installed
    if (!window.ethereum)
      throw new Error('No crypto wallet found. Please install it.');

    // Request connection with metamask
    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(process.env.REACT_APP_TREASURE_ADDRESS);

    // Transfer ethers
    const tx = await signer.sendTransaction({
      to: process.env.REACT_APP_TREASURE_ADDRESS,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether });
    console.log('tx', tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

const Home = () => {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    await startPayment({
      setError,
      setTxs,
      ether: data.get('ether'),
    });

    console.log(txs);
  };

  return (
    <div>
      <h1>Home</h1>
      <Form
        onSubmit={(e) => {
          formSubmitHandler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number of ethers</Form.Label>
          <Form.Control type="text" name="ether" placeholder="0.01" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>{error}</p>
    </div>
  );
};

export default Home;
