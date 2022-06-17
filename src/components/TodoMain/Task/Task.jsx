import React, {useEffect} from 'react';
import style from './Task.module.scss'

const Task = ({text, delTask, id, index,current}) => {

    let f = () => {
        delTask(id)
    }



    return (
        <div className={style.task}>
            <div className={style.index}>{index + 1}</div>
            <div className={style.time}>{current}</div>
            <div className={style.text}>{text}</div>
            <div className={style.box}><i onClick={f} className="fa-solid fa-trash-can"/></div>
        </div>
    );
};
// new Date().getMonth()
export default Task;