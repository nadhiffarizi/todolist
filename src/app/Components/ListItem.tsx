
import * as React from 'react';
import { useState } from 'react';

export function ListItem ({item, chore, doneTaskHandler, undoneTaskHandler}:{item:string, chore:string, doneTaskHandler:(item:string)=> void, undoneTaskHandler:(item:string)=>void}) {

    const [checked, setChecked] = useState(false)

  function handleChecked(e:React.ChangeEvent<HTMLInputElement>){
    // console.log(e.target.checked)
    setChecked(e.target.checked)
    if(e.target.checked){
        doneTaskHandler(item)
    } else{
        undoneTaskHandler(item)
    }   
  }  

  return (
    <div className='flex flex-row flex-none justify-around {/*bg-slate-400*/}' style={{height: "10%"}}>
        <div className="flex items-center justify-start flex-none w-1/6 " >
            <input type="checkbox" name="" id="" checked={checked} onChange={handleChecked} className="w-5 h-5"/>
        </div>
        <p className="flex items-center flex-1 text-start ">
            {chore}
        </p>
        <div className='flex items-center justify-start flex-none w-1/5'>
            <button type="button" className="flex justify-center items-center w-8 h-5/6 ms-6 bg-transparent border border-white-500 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.3" stroke="currentColor" className="w-6 text-white fill-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
 
            </button>
        </div>
    </div>
  );
}
