"use client"
import React, { useState } from "react";
import { Chores } from "@/Chores";

export default function RegisterToDo({myChores, addChores}:{myChores:Chores, addChores:(c:string[], mc:Chores)=> void}){

    // usestate
    const [chore, setChore] = useState("")
    const [chores, setChores] = useState<string[]>([])



    function addTask(){
        if (chore.length === 0){
            return 
        }

        // adding chore to the list
        chores.push(chore)

        setChores([...chores])
        myChores.setMyChores(chores)


        // console.log(myChores.getMyChores()?.join(", "))
        // pass chore to parent
        addChores(myChores.getMyChores(), myChores)
        setChore("")
       
    }

    return (
        <>
            <div className="w-6/12 flex flex-col items-start">
                <label htmlFor="inputTodo" className="mb-3">Add Todo</label>
                <input type="text" value={chore} onChange={(e) => setChore(e.target.value)} name="inputTodo" className="mb-5 w-full h-8 border border-gray-400 rounded-md bg-transparent"/>
                <button type="button" onClick={addTask} className="p-2 text-gray-800 font-semibold text-sm border border-slate-700 rounded-md" style={{backgroundColor:"#94CDF5"}}>
                    ADD TASK
                </button>
            </div>
        </>
    )
}
