import React, { useState, useRef } from 'react'
import Main from './Main';

function Todolist() {
    const [todo, Settodo] = useState([]);
    const inputtodo = useRef(null);
    const submit = () => {
        const tododata = inputtodo.current.value;
        Settodo(prevState => (
            [
                ...prevState, tododata
            ]
        ))
        console.log(todo);
    }
    const deleteitem = event => {
        const data = event.target.id;
        todo.splice(data, 1)
        Settodo([...todo])
        console.log(todo)
    }

    return (
        <div>
            <Main />
            <h1 style={{ marginLeft: "43%" }}>TodoList</h1><br />
            <br />
            <div className="d-flex justify-content-center m-2">
                <input type="text" name="todo" ref={inputtodo} />
                <input type="button" name="submit" onClick={submit} value="Submit" />
            </div>
            <div className="container ">
                <ul className="list-group">
                    {
                        todo.map((data, index) => {
                            return (
                                <li key={data.id} className="list-group-item">{data}<button type="button" className="close" aria-label="Close" id={index} onClick={deleteitem}>
                                    delete
                                </button></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todolist
