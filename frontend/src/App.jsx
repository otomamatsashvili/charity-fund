import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'pages/Home';
// import { useEffect } from 'react';

const App = () => {
  // useEffect(() => {
  //   const connectHandler = async () => {
  //     if (window.ethereum) {
  //       try {
  //         const res = await window.ethereum.request({
  //           method: 'eth_requestAccounts',
  //         });
  //         console.log(res[0]);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     } else {
  //       console.error('Metamask is not installed');
  //     }
  //   };
  //   connectHandler();
  // }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
