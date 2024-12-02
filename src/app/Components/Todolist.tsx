import * as React from 'react';
import { ListItem } from './ListItem';
import { useState } from 'react';
import { Chores } from '@/Chores';


export function Todolist ({myChores, chores, updateDoneTask, updateTask}:{myChores:Chores, chores:string[], updateDoneTask:(i:string[])=>void, updateTask:(i:string[])=>void}) {

  const [doneTasks, setDoneTasks] = useState<string[]>(myChores.getMyDoneChores())

  function doneTaskHandler(item:string){
      doneTasks.push(item)
      setDoneTasks([...doneTasks])
      myChores.setMyDoneChores(doneTasks)
      updateDoneTask(myChores.getMyDoneChores())
  }

  function undoneTaskHandler(item:string){
    const indexFound = doneTasks.findIndex((task)=>{
        return task === item
    })

    doneTasks.splice(indexFound, 1);
    setDoneTasks([...doneTasks])
    myChores.setMyDoneChores(doneTasks)
    updateDoneTask(doneTasks)

  }

  return (
    <div className='flex flex-col w-6/12 mb-3 mt-3'>
        <h1 className='flex items-end justify-center h-1/6 font-sans text-3xl font-bold text-gray-50 {/*bg-black*/}'>
            Chores ToDo List
        </h1>
        
        {/* <Lists myChores={myChores} chores={chores}/> */}

        <div className=" flex flex-col justify-center h-full {/*bg-slate-500 */} overflow-auto scrollbar-hide scroll-smooth">

            {
                chores.map((item, index)=>{
                    return <ListItem key={index} item={item} index={index} chore={item} doneTaskHandler={doneTaskHandler} undoneTaskHandler={undoneTaskHandler}/>
                })
            }

        </div> 
    </div>
  );
}
