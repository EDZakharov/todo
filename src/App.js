import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {TodoMainContainer} from "./components/TodoMain/TodoMainContainer";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={
                <div className='container'>
                <Header/>
                <TodoMainContainer/>
            </div>
            }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
