import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import toast   from 'react-hot-toast';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const resetAllPastes = useSelector((state) => state.paste.pastes);

  const [cancel, setcancel] = useState(0)

  useEffect(() => {
    if (pasteId) {
      const paste = resetAllPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);
  useEffect(() => {
    if(searchParams.get("pasteId"))
      setcancel(1)
    else
    setcancel(0)

    
  
   
  }, [])
  

  function createPaste() {
    if(title.length==0 && value.length==0){
      toast("Please Enter Something")
    }
    else{
      
  
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
}

  return (
    <main className= "bg-[url('./assets/bg.png')] bg-buttom bg-cover bg-rose-300 home h-[85vh]  relative">
    {/* {
      cancel?
      ( <a href="/pastes"  className=" absolute top-3 left-2" >
        cancel
    </a> ):""
    } */}
   
      <div className="flex lg:flex-row  flex-col lg:gap-7 items-center  justify-center my-5"> 
      {/* in this div input hy or button */}
        <input
          className="p-2 rounded-2xl mt-2 w-11/12  lg:w-4/12 p-l-4 focus:outline-slate-300 focus:shadow-lg duration-150"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste} className="p-2 rounded-2xl w-fit mt-2  focus:outline-slate-300 hover:border-slate-500">
          {pasteId ? "update my note" : "create my note"}
        </button>
      </div>



      <div className=" text-center lg:w-1/2  w-11/12 mx-auto">
        <textarea
          className="rounded-2xl mt-4,min-w-[500px] p-4 w-full  focus:outline-slate-300  "
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={19}
          
        />
      </div>
    </main>
  );
};

export default Home;
