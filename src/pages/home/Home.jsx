import { useState } from 'react';

import Header from '../../components/header/Header';

const Home = () => {
  const [state] = useState({
    heading: 'We are travel friends',
    paragraph:
      'Come & join us! We travel the most famous and beautiful places in the world',
  });

  const { heading, paragraph } = state;

  return (
    <>
      <Header heading={heading} paragraph={paragraph}>
        <button className='btn-default'>Get Started</button>
      </Header>
    </>
  );
};

export default Home;
