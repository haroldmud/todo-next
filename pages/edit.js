import Header from "../components/header";
function Edit() {
  return(
		<>
			<Header/>
			<h1 className="text-center mt-8 mb-4">COMPLETE THE FORM</h1>
			<div className="flex justify-center">
				<form action="add flex flex-col">
					<div>
            <input className="pl-4 py-1 italic outline-none border ml-2 rounded-sm" type="text" placeholder="time"/>
            <input className="pl-4 py-1 italic outline-none border ml-2 rounded-sm" type="text" placeholder="task"/>
          </div>
          <button className="border w-96 mt-4 ml-2 font-bold bg-cyan-500 active:border-2" type="submit">ADD</button>
				</form>
			</div>
		</>
	)
}

export default Edit;