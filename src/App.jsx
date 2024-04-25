import { useState, Fragment } from 'react'
import './Components/Card/Card'
import './App.css'
import Card from './Components/Card/Card'
import Profile from './Components/Profile/Profile'
import Skill from './Components/Skill/Skill'


function App() {
  return (
    <>
      <header>
        <h1 className='header__text'>Страничка с моими навыками</h1>
      </header>
      <main className='content'>
        <div className="content__about">
          <Profile name="Бочков Михаил Сергеевич" mail="jamescole2035@inbox.ru"/>
        </div>
        <Skill className="content__title" text="Мои навыки"/>
        <div className="content__cards">
          <Card text="PHP" />
          <Card text="JS" />
          <Card text="C#" />
          <Card text="GIT" />
        </div>
        <Skill className="content__title" text="Чему хотелось бы научиться"/>        
        <div className="content__cards">
          <Card text="Docker" />
          <Card text="GraphQL" />
          <Card text="Grafana, Prometheus" />
          <Card text="NextJS" />
          <Card text="Nuxt" />
          <Card text="Java" />
          <Card text="Spring" />
          <Card text=".Net" />
          <Card text="WebSocket" />
          <Card text="SQL, ORM" />
        </div>
      </main>
      <footer>
        <p className="footer__text">2024@JamesCole2035</p>
      </footer>      
    </>
  )
}

export default App
