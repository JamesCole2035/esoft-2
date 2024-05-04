import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const mySkills = ["PHP", "JS", "GIT", "C#"];
const wishSkills = ["Docker", "GraphQL", "Grafana, Prometheus", "NextJS", "Nuxt", "Java", "Spring", ".Net", "WebSocket", "SQL, ORM"];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App currentSkills={mySkills} futureSkills={wishSkills} />
  </React.StrictMode>,
)