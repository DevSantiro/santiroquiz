import React from 'react';
import styled from 'styled-components'
import db from '../db.json';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
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
            }}>

              <Input 
                name="nomeDoUsuario"
                onChange={(evento) => setName(evento.target.value) }
                placeholder="Digite seu nome" 
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h2>Quizes da Galera</h2>
            <p>Conteudo da Galera....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DevSantiro/santiroquiz" />
    </QuizBackground>
  );

}
