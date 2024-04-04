import React from 'react';
import { useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Engine from './components/Engine/Engine';
import Button from './components/Button/Button';

function App() {
  
  const [value, setValue] = useState('');
  const [count, setCount] = useState([])

  const handleChange = (el) => {
      setValue(el.target.value);
  }

  const addTask = (el) => {
    el.preventDefault();
    todo(value);
    setValue('')
  }

  const todo = (value) => {
      if (value){
        setCount([...count, {text: value, id: 1}])
      }
  }

  return (
    <div className='main_container'>
      <Container>
        <h1 className='title'>To Do App</h1>
        <div className="ui_container">
          <Engine val={value} funcChange={handleChange} />
          <Button addFunc={addTask} />
        </div>
        <div className="task_container">
          {count.map(count => {
              return(
                  <div className={'task'} key={count.id}>
                    {count.text}
                  </div>
              )
          })}
        </div>
      </Container>
    </div>
  )
}

export default App;
