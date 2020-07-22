import React from 'react';
import { Link } from 'react-router-dom';
import gif from '../../assets/giphy.webp';

import Header from '../../components/Header';

import { TextContainer } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TextContainer>
        <div>
          <h1>Jogue o clássico &quot;Jogo da Velha&quot; </h1>
          <p>com um amigo!</p>
          <Link to="/game">
            <button type="button">Comece!</button>
          </Link>
        </div>
        <img src={gif} alt="Não trapaceie" />
      </TextContainer>
    </>
  );
};

export default Home;
