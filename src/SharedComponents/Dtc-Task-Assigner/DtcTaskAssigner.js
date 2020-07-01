import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './style.scss'
import ReactTooltip from 'react-tooltip';


const DtcTaskAssigner = ({
    taskList,
    images: { completeIcon, editIcon, inProgressIcon, completeGreen, inProgressGreen, deleteIcon }
}) => {

    
    const [state, setState] = useState({
        taskName: '',
        taskDescription: '',
    })

    const [tasks, setTasks] = useState(taskList)
    const [status, setStatus] = useState(false)
    const [edit, setEdit] = useState({})
    const [btnText, setBtnText] = useState('Submit')


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)



        //edit the task
        if (status === true) {
            console.log(1)
            console.log(edit)
            let editedTask = {};
            editedTask = tasks.map(task => {
                
                if (task.taskName === edit.taskName) {
                    return Object.assign({}, task, { taskName: state.taskName, taskDescription: state.taskDescription })
                }
                return task;
            })
            console.log(editedTask)
            setTasks(editedTask)
            setState({
                taskName: '',
                taskDescription: '',
            })
            setBtnText('Submit')
            setStatus(false)

        }
        //add the task
        else { 
            console.log(2)
            let repeatStatus = false
            let obj = {}
            obj = { taskName: state.taskName, taskDescription: state.taskDescription }
            tasks.map(task =>{
                    if(task.taskName === state.taskName){                    
                        repeatStatus=true
                    }
                    return task;
            })
            if(repeatStatus === true){
                alert('the task you entered already exists')
            }
            else{
                setTasks([...tasks, obj])
            }
            setState({
                taskName: '',
                taskDescription: '',
            })
        }


        //edit the task
        // if (status === true) {
        //     console.log(state.taskName)
        //     console.log(edit)
        //     let editedTask = {};
        //     editedTask = tasks.map(task => {
        //         if (task.taskName === edit.taskName) {
        //             return Object.assign({}, task, { taskName: state.taskName, taskDescription: state.taskDescription })
        //         }
        //         return task;
        //     })
        //     console.log(editedTask)
        //     setTasks(editedTask)
        //     setState({
        //         taskName: '',
        //         taskDescription: '',
        //     })
        //     setBtnText('Submit')
        //     setStatus(false)

        // }
        //add the task
        // else{
        //     obj = { 'taskName': state.taskName, 'taskDescription': state.taskDescription }
        //     setTasks([...tasks, obj])
        //     setState({
        //         taskName: '',
        //         taskDescription: '',
        //     })
        // }
    }


    const onCompleteClicked = (completedTask) => {
        //remaining in complete tasks
        const remainingTask = tasks.filter(task =>
            task !== completedTask)
        setTasks(remainingTask)

        //completed tasks
        let completedTaskList = [];
        completedTaskList = tasks.map(task => {
            if (task.taskName === completedTask.taskName) {
                return Object.assign({}, task, { status: 'completed' })
            }
            return task;
        })
        console.log(completedTaskList)
        setTasks(completedTaskList)

        //to remove the task from inProgress list which is accidentally added
        //click on inProgress button to move the task back to assigned
        let assignedTaskList = [];
        if (completedTask.status === 'completed') {
            assignedTaskList = tasks.map(task => {
                if (task.taskName === completedTask.taskName) {
                    return Object.assign({}, task, { status: undefined })
                }
                return task;
            })
            console.log(assignedTaskList)
            setTasks(assignedTaskList)
        }
    }

    const onEditClicked = (task) => {
        document.getElementById("taskNameInput").focus();
        console.log(task)
        setEdit(task)
        setState({
            taskName: task.taskName,
            taskDescription: task.taskDescription,
        })
        setStatus(true)
        setBtnText('Update')

    }
    const onProgressClicked = (inProgressTask) => {
        //remaining tasks
        const remainingProgressTask = tasks.filter(task =>
            task !== inProgressTask)
        setTasks(remainingProgressTask)

        //inProgress tasks
        let inProgressTaskList = [];
        inProgressTaskList = tasks.map(task => {
            if (task.taskName === inProgressTask.taskName) {
                return Object.assign({}, task, { status: 'inProgress' })
            }
            return task;
        })
        console.log(inProgressTaskList)
        setTasks(inProgressTaskList)

        //to remove the task from inProgress list which is accidentally added
        //click on inProgress button to move the task back to assigned
        let assignedTaskList = [];
        if (inProgressTask.status === 'inProgress') {
            assignedTaskList = tasks.map(task => {
                if (task.taskName === inProgressTask.taskName) {
                    return Object.assign({}, task, { status: undefined })
                }
                return task;
            })
            console.log(assignedTaskList)
            setTasks(assignedTaskList)
        }
    }

    const deleteTaskClicked = (deleteTask) => {
        //remaining in complete tasks
        const remainingCompletedTask = tasks.filter(task =>
            task !== deleteTask)
        setTasks(remainingCompletedTask)

    }
    useEffect(()=>{
        ReactTooltip.rebuild()
    })

    


    return (
        <div>
            <div >
                <ReactTooltip place="bottom" type="light"  event="mouseover" eventOff="mouseout click" border={true} borderColor="black" className="task-tooltip" />
                <div style={{ textAlign: 'left' }}>
                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <Form.Group as={Row} >
                            <Form.Label column="lg" >
                                Task Name
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    required
                                    type="text" name="taskName"  value={state.taskName} onChange={handleInputChange} className="form-control" id="taskNameInput" placeholder="Task Name"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            <Form.Label column="lg" >
                                Task Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    required
                                    name="taskDescription" type="text" value={state.taskDescription} onChange={handleInputChange} className="form-control" id="taskDescriptionInput" placeholder="Task Description"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col >
                                <input type="submit" value={btnText} className='form-submit-btn' />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                <div className="multicolumn">
                    <div className="task-cards">
                        <h3 className="task-cards__heading">Assigned Tasks</h3>
                        {console.log(tasks.length)}
                        {tasks.map((task, i) => (
                            task.status === undefined ? (
                                <div key={i} className="task-cards__single">
                                    <div className="task-cards__single__main">
                                        <span  className="task-cards__single__main__name">{task.taskName}</span>
                                        <img data-tip="edit" className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img>
                                        <img data-tip="mark as inProgress"  className="task-cards__single__main__task-icon" src={inProgressIcon} alt="in-progress" onClick={() => onProgressClicked(task)}></img>
                                        <img data-tip="mark as completed"  className="task-cards__single__main__task-icon" src={completeIcon} alt="completed" onClick={() => onCompleteClicked(task)}></img>
                                    </div>
                                    <div className="task-cards__single__description">{task.taskDescription}</div>
                                </div>
                                ) : <div></div>
                        ))}
                    </div>
                    <div className="task-cards">
                        <h3 className="task-cards__heading">In Progress Tasks</h3>
                        {console.log(tasks.length)}
                        {tasks.map((task, i) => (
                            task.status === 'inProgress' ? (
                                console.log(task.length),
                                <div key={i} className="task-cards__single">
                                    <div className="task-cards__single__main">
                                        <span data-tip="task name" className="task-cards__single__main__name">{task.taskName}</span>
                                        <img data-tip="edit" className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img>
                                        <img data-tip="mark as incomplete" className="task-cards__single__main__task-icon" src={inProgressGreen} alt="in-progress" onClick={() => onProgressClicked(task)}></img>
                                        <img data-tip="mark as completed" className="task-cards__single__main__task-icon" src={completeIcon} alt="completed" onClick={() => onCompleteClicked(task)}></img>
                                    </div>
                                    <div data-tip="task description" className="task-cards__single__description">{task.taskDescription}</div>
                                </div>) : null
                        ))}
                    </div>
                    <div className="task-cards">
                        <h3 className="task-cards__heading">Completed Tasks</h3>
                        {console.log(tasks.length)}
                        {tasks.map((task, i) => (
                            task.status === 'completed' ? (
                                console.log(task.length),
                                <div key={i} className="task-cards__single">
                                    <div className="task-cards__single__main">
                                        <span data-tip="task name" className="task-cards__single__main__name">{task.taskName}</span>
                                        <img data-tip="mark as inProgress" className="task-cards__single__main__task-icon" src={inProgressIcon} alt="in-progress" onClick={() => onProgressClicked(task)}></img>
                                        <img data-tip="mark as incomplete" className="task-cards__single__main__task-icon" src={completeGreen} alt="completed" onClick={() => onCompleteClicked(task)}></img>
                                        <img data-tip="delete the task" className="task-cards__single__main__task-icon" src={deleteIcon} alt="in-progress" onClick={() => deleteTaskClicked(task)}></img>
                                    </div>
                                    <div data-tip="task description" className="task-cards__single__description">{task.taskDescription}</div>
                                </div>) : null
                        ))}
                    </div>
                </div>
            </div>





            {/* <div style={{ textAlign: 'left' }}>
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <Form.Group as={Row} >
                        <Form.Label column="lg" >
                            Task Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                type="text" name="taskName" value={state.taskName} onChange={handleInputChange} className="form-control" id="taskNameInput" placeholder="Task Name"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column="lg" >
                            Task Description
                            </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                required
                                name="taskDescription" type="text" value={state.taskDescription} onChange={handleInputChange} className="form-control" id="taskDescriptionInput" placeholder="Task Description"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col >
                            <input type="submit" value={btnText} className='form-submit-btn' />
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <div className="multicolumn">
                <div className="task-cards-column1">
                            {tasks.map((task, i) => (
                                task.status === undefined ? (
                                    <table className="task-table">
                                        <tbody>
                                        <tr key={i} className="task-cards__single">
                                            <td className="task-cards__single__main__name">{task.taskName}</td>
                                            <td><img className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img></td>
                                            <td><img className="task-cards__single__main__task-icon" src={inProgressIcon} alt="in-progress" onClick={() => onProgressClicked(task)}></img></td>
                                            <td><img data-tip="mark as completed" className="task-cards__single__main__task-icon" src={completeIcon} alt="completed" onClick={() => onCompleteClicked(task)}></img></td>
                                        </tr>
                                        <tr>
                                            <td>
                                            {task.taskDescription}
                                            </td>
                                        </tr>
                                        </tbody>
                                        </table>
                                ) : null
                            ))}
                </div>
                <div className="task-cards-column1">
                    {tasks.map((task, i) => (
                        task.status === "inProgress" ? (
                            <table className="task-table">
                                <tbody>
                                    <div>
                                        <tr key={i} className="task-cards__single">
                                            <td className="task-cards__single__main__name">{task.taskName}</td>
                                            <td><img className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img></td>
                                            <td><img className="task-cards__single__main__task-icon" src={inProgressGreen} alt="in-progress" onClick={() => onProgressClicked(task)}></img></td>
                                            <td><img data-tip="mark as completed" className="task-cards__single__main__task-icon" src={completeIcon} alt="completed" onClick={() => onCompleteClicked(task)}></img></td>
                                        </tr>
                                        <tr>
                                            <td>{task.taskDescription}</td>
                                        </tr>
                                    </div>
                                </tbody>
                            </table>
                        ) : null
                    ))}

                </div>
                <div className="task-cards-column1">
                    <table className="task-table">
                        {tasks.map((task, i) => (
                            task.status === "completed" ? (
                                <tbody>
                                    <tr key={i} className="task-cards__single">
                                        <td className="task-cards__single__main__name">{task.taskName}</td>
                                        <td><img className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img></td>
                                        <td><img className="task-cards__single__main__task-icon" src={inProgressIcon} alt="in-progress" onClick={() => onProgressClicked(task)}></img></td>
                                        <td><img data-tip="mark as completed" className="task-cards__single__main__task-icon" src={completeGreen} alt="completed" onClick={() => onCompleteClicked(task)}></img></td>
                                    </tr>
                                    <tr>
                                        <td>{task.taskDescription}</td>
                                    </tr>
                                </tbody>) : null
                        ))}

                    </table>
                </div>
            </div> */}
        </div>
    );
}

export default DtcTaskAssigner;