'use client'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Todolist = () => {
    //const [num, setNum] = useState(10);

    const [tasklist, setTasklist] = useState([
       

    ])

    const addTask = (e) => {
        
        if(e.code === 'Enter') {
          if(!e.target.value){
            toast.error('add a task');
            return;
          }
            console.log(e.target.value);

            const newTask = { text : e.target.value, completed: false, createdAt: new Date()};

            setTasklist([...tasklist, newTask ]);

            e.target.value='';
            toast.success('New Task Added Successfully');
        }
       
    };
    const toggleComplete = (index) => {
      const temp = tasklist;
      temp[index].completed = !temp[index].completed;
      setTasklist([...temp]);
    }
    const deleteTask = (index) => {
      console.log(index);
      const temp = tasklist;
      temp.splice(index,1);
      setTasklist([...temp ]);
      toast.success('Task Deleted Successfully');
    }
  return (
    <div className= 'max-w-[80%] mx-auto'>
        
         {/* <button onClick={ () => { setNum(num + 1); console.log(num); }}>add number</button> */}
      <h1 className='text-5xl font-bold text-center'>to do list</h1>
      <div className='border-2 rounded-md shadow mt-5'>
        <div className= 'border-b-2 border-gray-700 p-4'>
            <input placeholder='add a new task'
            className='border-2 border-blue-500 rounded p-3 w-full text-black'
           type ="text" 
           onKeyDown={addTask}
           />
        </div>
        <div className='p-5'>
            {
                tasklist.map( (task, index) => {
                    return <div key={index} className='shadow-md border-2 rounded-lg p-4 mb-5'>
                      {task.completed ?(
                        <p className='text-sm bg-green-500 px-3 w-fit  rounded-full text-white'>completed</p>
                      ) : (<p className='text-sm bg-yellow-500 px-3 w-fit rounded-full text-white'>pending</p>)}
                      <p className={ task.completed ?  'line-through' : ''}>{task.text}</p>
                    <div className='mt-3 flex gap-3 justify-end'>
                      <button 
                      onClick={() => { toggleComplete(index)}}
                      className='bg-blue-500 px-3 text-white rounded-full '>edit</button>
                      <button 
                        onClick={ () => {deleteTask(index)}}

                      
                      className='bg-red-500 px-3 text-white rounded-full '>delete</button>
                      </div></div> })
            }
        </div>

      </div>
    </div>
  )
}

export default Todolist
