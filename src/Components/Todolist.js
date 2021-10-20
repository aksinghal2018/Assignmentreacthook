import React, { useState, useRef, useEffect } from 'react'


function Todolist() {
    const [todo, Settodo] = useState([]);

    const inputtodo = useRef(null);
    const inputpriority = useRef(null);
    var id = 0;
    const submit = () => {
        const tododata = inputtodo.current.value;
        const todopriority = inputpriority.current.value;
        const data = { id: todo.length, value: tododata, priority: todopriority }
        if (tododata != "") {
            Settodo(prevState => (
                [
                    ...prevState, data
                ]
            ), [])
        }
        else {
            alert("Feild cannot be empty!")
        }

        console.log(todo);

    }

    const deleteitem = event => {
        const data = event.target.id;
        todo.splice(data, 1)
        Settodo([...todo])
        console.log(todo)
        localStorage.setItem("todolist", JSON.stringify(todo))
    }
    const donetask = event => {

        const item = document.getElementById(event.target.id)
        item.classList.toggle("btn-primary");
        item.innerHTML="Task Completed"
    }
    useEffect(() => {
        localStorage.setItem("todolist", []);
    }, [])
    return (
        <div className="container-fluid" style={{ color: 'blue' }}>

            <h1 style={{ marginLeft: "45%" }}>TodoList</h1><br />
            <br />
            <div className="d-flex" style={{ marginLeft: "38%", marginBottom: "24px" }}>
                <input type="text" name="todo" ref={inputtodo} placeholder="Tododata" />
                <select class="form-select" aria-label="Default select example" ref={inputpriority}>
                    <option selected>1</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
                <input type="button" name="submit" onClick={submit} value="Submit" />
            </div>
            <div >
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sno</th>
                            <th scope="col">Todo</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((data, index) => {
                            return (<tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.value}</td>
                                <td>{data.priority}</td>
                                <td className="d-flex justify-content-center"><button type="button" className="btn  mr-4" aria-label="Close" id={`done${index}`} onClick={donetask}>
                                    Done
                                </button> <button type="button" className="btn btn-danger" aria-label="Close" id={index} onClick={deleteitem}>
                                        delete
                                    </button></td>

                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todolist
