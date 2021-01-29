import React from 'react';
import styled from 'styled-components'
import db from '../db.json';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Head from 'next/head';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Imersão React 2021</title>
      </Head>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quem é esse Pokemon</h1>
          </Widget.Header>
          <Widget.Content>

            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`quiz?name=${name}`);
              console.log('Teste');
            }}>

              <input onChange={function (evento) { 
                console.log(evento.target.value);
                // State
                // (foto da tela, o que mudou? )
                setName(evento.target.value);
              }} 
              placeholder="Digite seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar 
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
                <h1>Quem é esse Pokemon</h1>

                <p>DAFSGHJKJHREGTRSHR....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DevSantiro/santiroquiz" />
    </QuizBackground>
  );

}
