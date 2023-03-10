import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Quiz from '../../services/Quiz.service';

const QuizListWrapper = styled.div`
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 425px) {
        margin: 16px 0;
    }
`;

const QuizLink = styled(Link)`
    border: 6px solid white;
    border-radius: 12px;
    margin: 8px 4px;
    width: 200px;
    height: 200px;
    text-align: center;
    font-size: 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1440px) {
        border: 4px solid white;
        width: 100px;
        height: 100px;
        font-size: 16px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        width: 70vw;
        height: 100px;
    }
`;

interface QuizListItem {
    id: number,
    continent: string
}

const QuizList: React.FC = () => {
    const [quizsList, setQuizsList] = useState<QuizListItem[]>();

    useEffect(()=>{
        const quizsList = Quiz.listQuizsLocally();
        setQuizsList(quizsList);
    }, []);

    return (
        <React.Fragment>
            {!quizsList ? (
                <div>Loading</div>
            ) : (
            <QuizListWrapper>
                {quizsList.map(quiz => (
                    <QuizLink key={quiz.id} to={`/quiz/${quiz.continent}`}><div>{quiz.continent.toUpperCase()}</div></QuizLink>                  
                ))}
            </QuizListWrapper>
            )}
        </React.Fragment>
    )
}

export default QuizList;