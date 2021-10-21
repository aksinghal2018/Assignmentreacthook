import React, { useState, useRef, useEffect } from 'react'
import { EncryptStorage } from 'encrypt-storage';
const encryptStorage = new EncryptStorage('secret-key', {
  });
  
function Todolist() {
    const [todo, Settodo] = useState([]);
    const [status,Setstatus]=useState(0);
    const inputtodo = useRef(null);
    const inputpriority = useRef(null);
    var id = 0;
    const submit = () => {
        const tododata = inputtodo.current.value;
        const todopriority = inputpriority.current.value;
        const data = { id: todo.length, value: tododata, priority: todopriority }
        var dataitem = todo;
        dataitem.push(data)
        dataitem = dataitem.sort(compare)
        if (tododata != "") {
            encryptStorage.setItem("todolist",JSON.stringify(dataitem))
            Settodo([...dataitem], [])
        }
        else {
            alert("Feild cannot be empty!")
        }
        Setstatus(prevState=>prevState+1)
        
    }

    const deleteitem = event => {
        const data = event.target.id;
        todo.splice(data, 1)
        Settodo([...todo])
        encryptStorage.setItem("todolist", JSON.stringify(todo))
    }
    const donetask = event => {
        const item = document.getElementById(event.target.id)
        item.classList.toggle("btn-primary");
        if(item.innerHTML =="Task Completed"){
            item.innerHTML="Done";
        }
        else{
        item.innerHTML = "Task Completed"
        }
        console.log((encryptStorage.getItem('todolist')))
    }
    const compare = (a, b) => {
        if (a.priority < b.priority) {
            return 1;
        }
        if (a.priority > b.priority) {
            return -1;
        }
        return 0;
    }

    useEffect(() => {if(encryptStorage.getItem("todolist")==undefined){
                encryptStorage.setItem("todolist", []);
    }
    else{
        Settodo(encryptStorage.getItem("todolist"))
        console.log("a")
        console.log(encryptStorage.getItem("todolist"))
    }
        var matches1 = document.getElementsByClassName('row1');
        var matches2 = document.getElementsByClassName('row2');
        var matches3 = document.getElementsByClassName('row3');
        var matches4 = document.getElementsByClassName('row4');
        var matches5 = document.getElementsByClassName('row5');
        if (matches1.length != 0) {
            for (var i = 0; i < matches1.length; i++) {
                matches1[i].classList.remove('bg-light');
                matches1.item(i).classList.add('bg-light');
            }
        }
        if (matches2.length != 0) {
            for (var i = 0; i < matches2.length; i++) {
                matches2[i].classList.remove('bg-secondary');
                matches2.item(i).classList.add('bg-secondary');
            }
        }
        if (matches3.length != 0) {
            for (var i = 0; i < matches3.length; i++) {
                matches3[i].classList.remove('bg-success');
                matches3.item(i).classList.add('bg-success');
            }
        }
        if (matches4.length != 0) {
            for (var i = 0; i < matches4.length; i++) {
                matches4[i].classList.remove('bg-danger');
                matches4.item(i).classList.add('bg-danger');
            }
        }
        if (matches5.length != 0) {
            
            for (var i = 0; i < matches5.length; i++) {
                matches5[i].classList.remove('bg-warning');
                matches5.item(i).classList.add('bg-warning');
            }
        }
        

    }, [status])
    return (
        <div className="container-fluid" style={{ color: 'blue' }}>

            <h1 style={{ marginLeft: "45%" }}>TodoList</h1><br />
            <br />
            <div className="d-flex" style={{ marginLeft: "38%", marginBottom: "24px" }}>
                <input type="text" name="todo" ref={inputtodo} placeholder="Tododata" />
                <select class="form-select" aria-label="Default select example" ref={inputpriority}>
                    <option value="1" selected>One</option>
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
                            return (<tr key={index} className={`row${data.priority}`}>
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
