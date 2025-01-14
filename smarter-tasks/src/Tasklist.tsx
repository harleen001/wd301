import React from "react";
import Task from "./Task";

interface Props{}
interface TaskItem{
    title:string
  }
  
interface State{
tasks: TaskItem[]
}

class TaskList extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state={tasks:[

            {title:"pay rent"},
            {title:"buy groceries"},
            {title:"complete homework"},
            {title:"work hard"},
            {title:"sleep on time"},
        ],
    };
    }
    render(){
        return <> {this.state.tasks.map(task => <Task title={task.title}/>)}</>
        //<Task title="hello tasklist" />
    }
}
export default TaskList