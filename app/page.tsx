"use client";
import { useState } from "react";

import Btn from "./btn";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

export default function PomodoroTimer() {
const [show,setShow] = useState(false)
const [hide,setHide] = useState(true)
const [color,setcolor] = useState<string>("#d4cecd")
const [count,setCount] = useState(25)
const [timeLeft, setTimeLeft] = useState(1500); // Total time in seconds (25 minutes)
const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // To store the interval ID


  function hideandShow() {
    setShow(true)
    setHide(false)
    setcolor("black") 
  }

  function showandHide() {
    setShow(false)
    setHide(true)
    setcolor("#d4cecd") 
  }

  function handelIncreaseCount() {
    setCount(count + 1)
    setTimeLeft((count + 1) * 60)
  }

  function handelDecreaseCount() {
    if(count > 1){
    setCount(count - 1)
    setTimeLeft((count -1) *60)
    }
  }
  function handelrefreshandler() {
    setCount(25)
    setTimeLeft(1500)

    if (intervalId) {
        clearInterval(intervalId); // Clear the interval
        setIntervalId(null); // Reset the interval ID
      }
    
  }

  function handlerStart() {
    if (!intervalId) {
      const id = setInterval(() => {
        setTimeLeft((count) => {
          if (count <= 0) {
             clearInterval(id);
            setIntervalId(null);
            return 0;
          }
          return count - 1;
        });
      }, 1000);
      setIntervalId(id); // Store the interval ID
    }
  }

  // Calculate minutes and seconds left
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  

  
  return (
    <>
  <main className="flex justify-center items-center text-center flex-col h-screen " style={{backgroundColor:color}}>
   {hide && ( <div className="h-[400px] w-[400px] bg-white rounded-xl mt-[100px] ">
      <h1 className="mt-5 text-2xl font-bold text-black">Pomodoro Timer</h1>
      <p className="text-gray-600 text-center mt-3">A timer for the Pomodoro Technique.</p>
      <h4 className="text-xl font-semibold text-gray-800 mt-5">Work</h4>
      <div className="flex justify-center items-center text-center text-4xl text-black font-bold mt-5">
      <h2>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </h2>
      </div>
      <div className="flex flex-row gap-x-7 justify-center items-center mt-5">
        <button className="text-4xl" onClick={handelDecreaseCount}>-</button>
        <button className="text-2xl" onClick={handelIncreaseCount}>+</button>
        <button onClick={handlerStart}><FaPlay /></button>
        <button  onClick={handelrefreshandler}> <FiRefreshCw  onClick={handelrefreshandler} /></button>

      </div>

     <Btn text="What is Pomodoro Technique" width="250px" onHandler={hideandShow} />
    </div>)}



     {/* second div */}
     {show &&(   <div className="">
       <div className="flex justify-center items-center text-center">
        <div className="w-[700px] h-[500px] bg-white rounded-xl mt-[100px] mb-[100px]">
            <h2 className="text-xl font-bold mt-10">➡️ Explanation of Pomodoro Technique 🔥</h2>
            <p className="mt-5 text-gray-500 text-start ml-10 mr-10 font-medium">The Pomodoro Technique is a time management method that uses a timer to break work into intervals called Pomodoros. The Pomodoro timer is traditionally set for 25 minutes, but can be customized to fit your needs. The basic steps are:</p>
            <div className="mt-5 text-left ml-10 font-semibold text-gray-500">
                <ol>
                    <p>1. Select a single task to focus on.</p>
                    <p>2. Set a timer for 25-30 min. and work continuously until the timer goes off.</p>
                    <p>3. Take a productive 5 min. break-walk around, get a snack, relax.</p>
                    <p>4. Repeat steps 2 & 3 for 4 rounds.</p>
                    <p>5. Take a longer (20-30 min.) break. </p>
                </ol>
                
            </div>
            <div className="flex justify-start ml-10 "> <Link href="https://todoist.com/productivity-methods/pomodoro-technique"> <Btn text="Click here to read more" width="250px"/></Link></div>
            <div className="flex flex-row  justify-end gap-x-9 mr-10">
                <Btn text="Cancel" width="100px" bcolor="#ced6d0" textcolor="black" onHandler={showandHide}/>
                <Btn text="Continue" width="100px" onHandler={showandHide} />
            </div>
         
        </div>
       </div>
       </div> )}
   </main> 
   </>
  )
}
