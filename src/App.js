import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header/Header";
import {TodoMainContainer} from "./components/TodoMain/TodoMainContainer";



function App() {
  return (
    <>
        <div className='container'>
            <Header/>
            <TodoMainContainer/>
        </div>
    </>
  );
}

export default App;
