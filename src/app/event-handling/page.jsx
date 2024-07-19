'use client';
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onload = (data) => {
            const img = new Image();
            img.src = data.target.result;
            document.body.append(img);
        };

        reader.readAsDataURL(file);
    }

  return (
    <div classname='max-w-5xl mx-auto h-full'>
      <h1 classname= 'text-4xl text-center font-bold my-5'>Event Handling in React</h1>
      

      <button classname='mt-5 bg-violet-700 p-3 text-white rounded-md'
      onClick={() => {alert('button was clicked');}}
      >click me</button>
      <input classname='border-2 bprder-gray-500 rounded-md py-1 px-3 w-full mt-3'
      onChange={(e) => {console.log(e.target.value); }}
      type="text" />

      <input type="color"classname='mt-5' 
      onChange={(e)=> {document.body.style.backgroundColor = e.target.value}}
      />
      <input type="file" 
      onChange={(e) => {console.log(e.target.file);} }
      />

      <input type="file" 
      onChange={previewImage}
      />


    </div>
  )
}

export default EventHandling
