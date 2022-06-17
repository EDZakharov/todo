import React from 'react';
import style from './Task.module.scss'

const Task = ({text,delTask,id}) => {
    let f = () => {
        delTask(id)
    }
    return (
        <div className={style.task}>
            <textarea defaultValue={text} readOnly={true}/>
            <i onClick={f} className="fa-solid fa-trash-can"/>
        </div>
    );
};

export default Task;