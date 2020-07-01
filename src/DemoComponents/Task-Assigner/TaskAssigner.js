import React from 'react';
import './style.scss'
import DtcTaskAssigner from '../../SharedComponents/Dtc-Task-Assigner/DtcTaskAssigner';
import { taskList, images } from './TaskAssignerData';

function TaskAssigner(props) {
    // const taskList = [
    //     {
    //         taskName: "task1",
    //         taskDescription: "task1 description",
    //         status:'inProgress'
    //     },
    //     {
    //         taskName: "task2",
    //         taskDescription: "task2 description",
    //         status:'completed'
    //     },
    //     {
    //         taskName: "task3",
    //         taskDescription: "task3 description",
            
    //     }
    // ]
    // var obj = {}
    // const [state, setState] = useState({
    //     taskName: '',
    //     taskDescription: '',
    // })

    // const [tasks, setTasks] = useState(taskList)
    // const [status, setStatus] = useState(false)
    // const [edit, setEdit] = useState({})
    // const [btnText, setBtnText] = useState('Submit')
   

    // const handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     setState({
    //         ...state,
    //         [name]: value
    //     });
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(event)
    //     if (status === false) {
    //         obj = { 'taskName': state.taskName, 'taskDescription': state.taskDescription }
    //         setTasks([...tasks, obj])
    //         setState({
    //             taskName: '',
    //             taskDescription: '',
    //         })
            
    //     }
    //     if (status === true) {
    //         console.log(state.taskName)
    //         console.log(edit)
    //         let editedTask = {};
    //         editedTask = tasks.map(task => {
    //             if (task.taskName === edit.taskName) {
    //                 return Object.assign({}, task, { taskName: state.taskName, taskDescription: state.taskDescription })
    //             }
    //             return task;
    //         })
    //         console.log(editedTask)
    //         setTasks(editedTask)
    //         setState({
    //             taskName: '',
    //             taskDescription: '',
    //         })
    //         setBtnText('Submit')
    //         setStatus(false)
            
    //     }
    // }


    // const onCompleteClicked = (completedTask) => {
    //     //remaining in complete tasks
    //     const remainingTask = tasks.filter(task =>
    //         task !== completedTask)
    //     setTasks(remainingTask)
        
    //     //completed tasks
    //     let completedTaskList = [];
    //     completedTaskList = tasks.map(task => {
    //         if (task.taskName === completedTask.taskName) {
    //             return Object.assign({}, task, { status:'completed' })
    //         }
    //         return task;
    //     })
    //     console.log(completedTaskList)
    //     setTasks(completedTaskList)

    //     //to remove the task from inProgress list which is accidentally added
    //     //click on inProgress button to move the task back to assigned
    //     let assignedTaskList = [];
    //     if(completedTask.status === 'completed'){
    //         assignedTaskList = tasks.map(task => {
    //             if (task.taskName === completedTask.taskName) {
    //                 return Object.assign({}, task, { status:undefined })
    //             }
    //             return task;
    //         })
    //         console.log(assignedTaskList)
    //         setTasks(assignedTaskList)
    //     }
    // }

    // const onEditClicked = (task) => {
    //     console.log(task)
    //     setEdit(task)
    //     setState({
    //         taskName: task.taskName,
    //         taskDescription: task.taskDescription,
    //     })
    //     setStatus(true)
    //     setBtnText('Update')

    // }
    // const onProgressClicked = (inProgressTask) => {
    //     //remaining tasks
    //     const remainingProgressTask = tasks.filter(task =>
    //         task !== inProgressTask)
    //     setTasks(remainingProgressTask)
        
    //     //inProgress tasks
    //     let inProgressTaskList = [];
    //     inProgressTaskList = tasks.map(task => {
    //         if (task.taskName === inProgressTask.taskName) {
    //             return Object.assign({}, task, { status:'inProgress' })
    //         }
    //         return task;
    //     })
    //     console.log(inProgressTaskList)
    //     setTasks(inProgressTaskList)

    //     //to remove the task from inProgress list which is accidentally added
    //     //click on inProgress button to move the task back to assigned
    //     let assignedTaskList = [];
    //     if(inProgressTask.status === 'inProgress'){
    //         assignedTaskList = tasks.map(task => {
    //             if (task.taskName === inProgressTask.taskName) {
    //                 return Object.assign({}, task, { status:undefined })
    //             }
    //             return task;
    //         })
    //         console.log(assignedTaskList)
    //         setTasks(assignedTaskList)
    //     }
    // }
    


    return (
        <div className="task-assigner">
            <DtcTaskAssigner taskList={taskList} images={images}></DtcTaskAssigner>
        </div>
        // <div className="task-assigner">
        //     <ReactTooltip place="bottom" type="light" effect="float"  eventOff="click" className='task-tooltip' />
        //     <div style={{ textAlign: 'left' }}>
        //         <Form onSubmit={handleSubmit} autoComplete="off">
        //             <Form.Group as={Row} >
        //                 <Form.Label column="lg" >
        //                     Task Name
        //                 </Form.Label>
        //                 <Col sm="10">
        //                     <Form.Control
        //                         required
        //                         type="text" name="taskName" value={state.taskName} onChange={handleInputChange} className="form-control" id="taskNameInput" placeholder="Task Name"
        //                     />
        //                 </Col>
        //             </Form.Group>
        //             <Form.Group as={Row} >
        //                 <Form.Label column="lg" >
        //                     Task Description
        //                     </Form.Label>
        //                 <Col sm="10">
        //                     <Form.Control
        //                         required
        //                         name="taskDescription" type="text" value={state.taskDescription} onChange={handleInputChange} className="form-control" id="taskDescriptionInput" placeholder="Task Description"
        //                     />
        //                 </Col>
        //             </Form.Group>
        //             <Form.Group as={Row}>
        //                 <Col >
        //                     <input type="submit" value={btnText} className='form-submit-btn' />
        //                 </Col>
        //             </Form.Group>
        //         </Form>
        //     </div>
        //     <div className="multicolumn">
        //     <div className="task-cards">
        //         <h3>Assigned</h3>
        //         {tasks.map((task, i) => (
        //             task.status===undefined?(
        //             <div key={i} className="task-cards__single">
        //                 <div className="task-cards__single__main">
        //                     <span className="task-cards__single__main__name">{task.taskName}</span>
        //                     <img className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img>
        //                     <img className="task-cards__single__main__task-icon"  src={inProgressIcon} alt="in-progress" onClick={() => onProgressClicked(task)}></img>
        //                     <img data-tip="mark as completed" className="task-cards__single__main__task-icon" src={completeIcon} alt="completed" onClick={() => onCompleteClicked(task)}></img>
                            
        //                 </div>
        //                 <div className="task-cards__single__description">{task.taskDescription}</div>                       
        //             </div>):<div></div>
        //         ))}
        //     </div>
        //     <div className="task-cards">
        //         <h3>In Progress</h3>
        //         {tasks.map((task, i) => (
        //             task.status==='inProgress'?(
        //             <div key={i} className="task-cards__single">
        //                 <div className="task-cards__single__main">
        //                     <span className="task-cards__single__main__name">{task.taskName}</span>
        //                     <img className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img>
        //                     <img className="task-cards__single__main__task-icon"  src={inProgressGreen} alt="in-progress" onClick={() => onProgressClicked(task)}></img>
        //                     <img className="task-cards__single__main__task-icon" src={completeIcon} alt="completed" onClick={() => onCompleteClicked(task)}></img>
        //                 </div>
        //                 <div className="task-cards__single__description">{task.taskDescription}</div>                       
        //             </div>):null
        //         ))}
        //     </div>
        //     <div className="task-cards">
        //         <h3>Assigned</h3>
        //         {tasks.map((task, i) => (
        //             task.status==='completed'?(
        //             <div key={i} className="task-cards__single">
        //                 <div className="task-cards__single__main">
        //                     <span className="task-cards__single__main__name">{task.taskName}</span>
        //                     <img className="task-cards__single__main__task-icon" src={editIcon} alt="edit-task" onClick={() => onEditClicked(task)}></img>
        //                     <img className="task-cards__single__main__task-icon"  src={inProgressIcon} alt="in-progress" onClick={() => onProgressClicked(task)}></img>
        //                     <img data-tip="mark as incomplete" className="task-cards__single__main__task-icon" src={completeGreen} alt="completed" onClick={() => onCompleteClicked(task)}></img>
        //                 </div>
        //                 <div className="task-cards__single__description">{task.taskDescription}</div>                       
        //             </div>):null
        //         ))}
        //     </div>
        //     </div>
        // </div>
    );
}

export default TaskAssigner;