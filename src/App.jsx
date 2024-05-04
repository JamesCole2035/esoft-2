import { useState, Fragment } from 'react'
import './Components/Card/Card'
import './App.css'
import Profile from './Components/Profile/Profile'
import Skill from './Components/Skill/Skill'

function App(props) {
  const currentSkills = props.currentSkills;
  const futureSkills = props.futureSkills;
  return (
    <>
      <header>
        <h1 className='header__text'>Приветствую! Вы находитесь на личной страничке</h1>
      </header>
      <main className='content'>
        <div className="content__about">
          <Profile name="Бочков Михаил Сергеевич" mail="jamescole2035@inbox.ru" tg="https://t.me/JamesCole2035" />
        </div>     
        <div className="content__cards">
          <Skill skills={currentSkills} text="Мои навыки"/>
        </div>
        <div className="content__cards">
          <Skill skills={futureSkills} text="Чему хотелось бы научиться"/>
        </div>
      </main>
      <footer>
        <p className="footer__text">2024@JamesCole2035</p>
      </footer>      
    </>
  )
}

export default App
