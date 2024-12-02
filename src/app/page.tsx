"use client"
import { Todolist } from "./Components/Todolist";
import RegisterToDo from "./Components/RegisterToDo";
import { useState } from "react";
import { Chores } from "@/Chores";

export default function Home() {

  const myChores:Chores = new Chores([])
  const [chores, setChores] = useState<string[]>([])
  const [doneTasks, setDoneTasks] = useState<string[]>(myChores.getMyDoneChores())
  

  function addChoresFunc(c:string[]){
    setChores([...c])
  }

  function updateDoneTask(item:string[]){
    setDoneTasks([...item])
  }

  function updateTask(item:string[]){
    setChores([...item])
  }

  return (
    <div className="w-full h-screen ">
      <div className="flex flex-row justify-center w-full h-3/5">
        <Todolist myChores={myChores} chores={chores} updateDoneTask={updateDoneTask} updateTask={updateTask}/>
      </div>

      <div className="w-full bg-slate-400" style={{height: "0.2px"}}>
      
      </div>

      <h1 className="flex items-center justify-center w-full h-1/6 text-2xl text-gray-50 {/*bg-slate-950*/ } ">
        Done : {doneTasks.length}
      </h1>

      <div className="flex flex-col items-center w-full h-1/5">
        {/*add list*/}
        <RegisterToDo myChores={myChores} addChores={addChoresFunc}/>
      </div>
    </div>
  );
}
