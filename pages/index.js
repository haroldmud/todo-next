import { useEffect, useState } from "react"
import {VscDiffAdded} from "react-icons/vsc"
import {GrFormTrash} from  "react-icons/gr"
import {RiCheckboxBlankCircleLine} from "react-icons/ri"
import {RiCheckboxCircleLine} from "react-icons/ri"
import {AiOutlineEdit} from "react-icons/ai"
import {BiCheck} from "react-icons/bi"


export default function Home() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [check, setCheck]=useState(-1);
  const [edit, setEdit] = useState(null);
  const [alerte, setAlerte] = useState(false)
  const [limit, setLimit] = useState(false)
  
  function handleList(e){
    e.preventDefault();
    item.split("").length < 1 ? setAlerte(true) : item.split("").length > 20 ? setLimit(true) : setList(current => [...current, {text: item, checked: false, trash: false}]);
    item.split("").length > 20 ?
    setItem(current => current) : setItem("") ;
  }
  
  useEffect(()=>{
    const display = setTimeout(()=>{
      setAlerte(false)
    }, 3000)

    return ()=> clearTimeout(display);
  },[alerte])

  useEffect(()=>{
    const displaying = setTimeout(()=>{
      setLimit(false)
    }, 3000)
    return ()=> clearTimeout(displaying);
  },[limit])

  function handleDeletion(index){
    const newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }  

  return (
   <section className="flex justify-center">
      <div className="flex flex-col w-5/12 h-[100vh] justify-center">
        <div className=" border border-gray-500 h-[45rem]">
          <h1 className="text-center text-gray-200 font-bold text-7xl underline mt-6">TODO</h1>
          <div className="flex justify-center">
            <form className="border border-gray-500 w-3/5 flex gap-21 mt-12">
              <div className="w-11/12 flex flex-col justify-center p-2">
                <input value={item} onChange={(e)=>{setItem(e.target.value); }} className="outline-none"  type="text" />
              </div>
              <div className="flex flex-col justify-center">
                <button onClick={handleList}><VscDiffAdded/></button>
              </div>
            </form>
          </div>
        <p className={`${alerte ? "block" : "hidden"} text-red-500 text-[0.7rem] italic ml-28`}>the field is empty</p>
        <p className={`${limit ? "block" : "hidden"} text-green-500 text-[0.7rem] italic ml-28`}>oops! the characters were exceeded</p>
          <div className="flex justify-center">
            <div className={`flex w-5/12 h-[10rem] ${list.length < 6 ?"":"scroll overflow-y-scroll"}  justify-center mt-6`}>
              <ul className="border w-full h-fit flex flex-col gap-2">
                {
                  list.map((collection, idx)=>
                  <li key={idx} className="group relative hover:bg-slate-400 flex justify-between px-1">
                    <label className="flex gap-4">
                      <div className="flex flex-col justify-center" onClick={()=>{
                        if(check !== collection.text) {
                          setCheck(collection.text)
                        }else{
                          setCheck(null)
                        }
                      }}>
                        <button className={`${collection.text ===check ? "hidden" : ""}`}><RiCheckboxBlankCircleLine/></button>
                        <button className={`${collection.text === check ? "" : "hidden"}`}><RiCheckboxCircleLine/></button>
                      </div>
                      {/* check ? "line-through" : "" */}
                      <p className={`${collection.text === check ? "line-through":"underline" }`}>{collection.text}</p>  
                    </label>
                    <div className={`${collection.text === edit ? "flex" :"hidden"} absolute w-full justify-center bg-slate-400 border -ml-1 gap-8`}>
                      <input className="w-9/12 placeholder:text-gray-500  placeholder:italic placeholder:text-[0.7rem] bg-slate-400 outline-none pl-8 border-blue-500 z-10 " placeholder="edit here" type="text" />
                      <button onClick={()=>setEdit(null)} className="my-auto"><BiCheck/></button>
                    </div>
                  <div className="flex  justify-center gap-1">
                    <button className={check === collection.text ? "block text-[0.75rem] my-auto" : "hidden"} onClick={()=>{
                      if(edit !== collection.text){
                        setEdit(collection.text)
                      } else {
                        setEdit(null)
                      }
                    }}><AiOutlineEdit/></button>
                    <button className={check === collection.text ? "block" : "hidden"} onClick={()=>handleDeletion(idx)}><GrFormTrash/></button>
                  </div></li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}