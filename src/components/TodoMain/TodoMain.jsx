import React, {useEffect, useState} from 'react';
import style from './TodoMain.module.scss'
import Task from "./Task/Task";

const TodoMain = ({tasks,addTodo,dellTodo}) => {
    const [taskList, setTaskList] = useState(false)
    const [value, SetValue] = useState('')

    return (
        <main className={style.main}>
            <div
                onClick={() => {setTaskList(!taskList)}}
                className={style.showOrHide}>
                {!taskList
                    ? <i className="fa-regular fa-eye"/>
                    : <i className="fa-solid fa-eye-slash"/>}
            </div>
            {taskList
                ? <div>
                    <form className={style.form}>
                        <input value={value} onChange={e => {
                            SetValue(e.target.value)
                        }}/>
                        123454353453
                        <i className="fa-solid fa-plus" onClick={e => {
                            e.preventDefault()
                            if(value !== ''){
                                addTodo({id:Date.now(),text:value})
                                SetValue('')
                            }
                        }}/>
                    </form>

                {tasks.todo.map(el => <Task key={el.id} text={el.text} delTask={dellTodo} id={el.id}/>)}
            </div>
                : ''}
        </main>
    );
};

export default TodoMain;