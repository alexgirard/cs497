import styles from '../styles/Home.module.css'
import Q1 from '../components/q1'
import Q2 from '../components/q2'
import Slide from 'react-reveal/Slide';
import {useState} from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Section1() {
    const [questions, _setQuestion] = useState(1);
    const nextQuestion = () => {_setQuestion(questions + 1)}
    const previousQuestion = () => {_setQuestion(questions - 1)}
    console.log(questions)
  return (
    <div className={styles.container}>
        <div style={{display: 'flex'}}>
        <Button onClick={previousQuestion} disabled={questions <= 1}>{'<'}</Button>
        <Container>
            <Slide left={questions>1} right={questions<=1} opposite when={questions == 1}>
                <Q1/>
            </Slide>
            <Slide left={questions>=2} right={questions<2} opposite  when={questions == 2}>
                <Q2/>
            </Slide>
        </Container>
        <Button onClick={nextQuestion} disabled={questions >= 2}>{'>'}</Button>
        </div>
    </div>
  )
}
