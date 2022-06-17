import React, {useEffect, useState} from 'react';
import style from './TodoMain.module.scss'
import Task from "./Task/Task";

const TodoMain = ({tasks, addTodo, dellTodo, loadLocalList}) => {

    const [taskList, setTaskList] = useState(false)
    const [value, SetValue] = useState('')

    useEffect(()=>{
        if(tasks.todo.length === 0 && JSON.parse(localStorage.getItem('localSaved')).length !== 0){
            loadLocalList(JSON.parse(localStorage.getItem('localSaved')))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tasks.todo])


    let date = new Date()
    let getDate = () => {
        let yyyy = date.getFullYear().toString().slice(-2),
            mm = ('0' + (date.getMonth() + 1)).slice(-2),
            dd = ('0' + date.getDate()).slice(-2),
            hh = ('0' + date.getHours()).slice(-2),
            min = ('0' + date.getMinutes()).slice(-2)
            // sec = ('0' + date.getSeconds()).slice(-2)
        return dd + '.' + mm + '.' + yyyy + '\n' + hh + ':' + min
    }

    let onFunc = (e) => {
        e.preventDefault()
        addTodo({id: Date.now(), text: value, current: getDate()})
        SetValue('')
    }

    return (
        <main className={style.main}>
            <div className={style.showOrHide}
                onClick={() => {
                    setTaskList(!taskList)
                }}>
                {!taskList
                    ? <i className="fa-regular fa-eye"/>
                    : <i className="fa-solid fa-eye-slash"/>}
                    123
            </div>
            {taskList
                ? <div className={style.inputForm}>
                    <form>
                        <div className={style.form}>
                            <input placeholder={'Enter your task'} value={value} onKeyPress={e =>{
                                if (e.code === 'Enter') {
                                    e.preventDefault()

                                }
                            }} onChange={e => {
                                SetValue(e.target.value)
                            }} onKeyDown={e => {
                                if (e.code === 'Enter' && value.trim() !== '') {
                                    onFunc(e)
                                }
                            }}/>
                            <i className="fa-solid fa-plus" onClick={e => {
                                e.preventDefault()
                                if (value.trim() !== '') {
                                    onFunc(e)
                                }
                            }}/>
                        </div>

                    </form>
                    <div className={style.taskList}>
                        {tasks.todo.map((el, index) => <Task key={el.id}
                                                             text={el.text}
                                                             delTask={dellTodo}
                                                             id={el.id}
                                                             index={index}
                                                             current={el.current}/>)}
                    </div>
                </div> : ''}
        </main>
    );
};

export default TodoMain;