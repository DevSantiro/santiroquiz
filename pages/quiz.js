import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

// function QuestionWidget({
//   question,
//   questionIndex,
//   totalQuestions,
//   onSubmit,
// }) {
//   const questionId = `question__${questionIndex}`;

function QuestionWidget({question, totalQuestions, questionIndex}){
    const questionId = `question__${questionIndex}`;
    return (
        <Widget>
            <Widget.Header>
                {/* <BackLinkArrow href="/" /> */}
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}    
                </h2>
                <p>
                    {question.description}
                </p>
                <form>
                {question.alternatives.map( (alternative, alternativeIndex) => {
                    const alternativeId = `alternative__${alternativeIndex}`;
                    return (
                        <Widget.Topic
                            as="label"
                            htmlFor={alternativeId}
                        >
                            <input 
                                style = {{display: 'none'}}
                                id={alternativeId}
                                name={questionId}
                                type="radio"
                            />
                        {alternative}
                        </Widget.Topic>
                    );
                })}

                {/* <pre>
                    {JSON.stringify(question, null, 4)}
                </pre> */}

                {/* <form
                onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault();
                    onSubmit();
                }}
                >
                {question.alternatives.map((alternative, alternativeIndex) => {
                    const alternativeId = `alternative__${alternativeIndex}`;
                    return (
                    <Widget.Topic
                        as="label"
                        htmlFor={alternativeId}
                    >
                        <input
                        // style={{ display: 'none' }}
                        id={alternativeId}
                        name={questionId}
                        type="radio"
                        />
                        {alternative}
                    </Widget.Topic>
                    );
                })} */}


                {/* <pre>
                    {JSON.stringify(question, null, 4)}
                </pre> */}

                <Button type="submit">
                    Confirmar
                </Button>

                </form>
            </Widget.Content>
        </Widget>
    );
}

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
            <QuizLogo />

            <QuestionWidget 
                question={question} 
                questionIndex={questionIndex}
                totalQuestions={totalQuestions}
            />

            <LoadingWidget />
        </QuizContainer>
    </QuizBackground>
  );
}