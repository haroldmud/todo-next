import { useState } from "react"
import Header from "../components/header"

export default function Home() {
  const list = [
    {
      time: "5:30",
      task: "Workout",
    },
    {
      time: "6:30",
      task: "Shower"
    },
    {
      time: "7:30",
      task: "Trim"
    }
  ]
  const [task, setTask] = useState(list)

  const addItem =()=> {
    setTask([...list, ])
  }

  return (
    <>
      <Header/>
      <h1 className="font-bold text-center mt-12">
        TASK TO BE DONE TODAY
      </h1>
      <div className="flex justify-center mt-12">
        <ul className="flex flex-col w-[20rem] border">
          {
            task.map( (item, index) => <li key={index} className="flex justify-between border m-2 p-2">
              <h2>{item.time} ➵ {item.task}</h2>
              <button className="text-xs bg-slate-500 px-1 rounded-xl">remove</button>
              </li>)
          }
        </ul>
      </div>
    </>
  )
}
