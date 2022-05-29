import { useState } from 'react'
import './App.css'
import users from './Json/users.json'
import Card from './Components/Card'


const arrayColor = [
  '#6B4A0A',
  '#304377', 
  '#A3154A', 
  '#9681D7',
]

function App() {

  const createNumberRandom = array => { 

  return Math.floor(Math.random() * array.length)
  
}


const getElementRandom = array => {
  const i = createNumberRandom(array)
  return(array[i])
}

  const [userRandom, setUserRandom] = useState(getElementRandom(users))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColor))

const clickButton = () => {
  setUserRandom (getElementRandom(users))
  setColorRandom (getElementRandom(arrayColor))
}

  const appStyle = {
    backgroundColor: colorRandom
  }
  return (
    <div style= {appStyle} className="App">
      
      
      <Card 
      userRandom={userRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
      </div>
  )
}
export default App
