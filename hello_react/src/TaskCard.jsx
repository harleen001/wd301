/* eslint-disable react/prop-types */
const TaskCard = (props) =>{
  console.log(props);

    return(
      <div className="text-xl font-bold">
      <h2>{props.title}</h2>
      <p>{props.card}</p>
      <p>Assignee: Harleen Singh</p>
    </div>
  
    )
  }
  export default TaskCard;