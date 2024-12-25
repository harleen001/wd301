
import TaskCard from "./TaskCard";
import Navbar from "./Navbar";

function App() {
  
{/* let name = "Harleen"
const numbers = [1,2,4,5]  */ }
  return (
   <>
 {/* <h1>Hello {name}</h1>
  <h2>these are numbers {numbers}</h2> */}
  <div>
    <Navbar navname="home"/>
    <Navbar navname="about"/>
    <Navbar navname="section"/>
    <Navbar navname="contact"/>
  </div>
<div>
  <div> <h1>Pending</h1>
  <TaskCard title="Title for 1st Card" card="abc" />
  <TaskCard title="Title for 2nd Card" card="def"/>
  </div>

  <div> <h1>Done</h1>
  <TaskCard title="Title for 3rd Card" card="ghi" />
  <TaskCard title="Title for 4th Card" card="jkl" />
  </div>


</div>

  </>
  );
}

export default App
