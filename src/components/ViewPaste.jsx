
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";import { useNavigate } from "react-router-dom";
import PreviousPageButton from "./Previcousbtn";


const ViewPaste = () => {

    const {id} =useParams();
    const allPastes = useSelector((state) =>state.paste.pastes);

    const paste = allPastes.filter((p)  =>p._id === id)[0];
    console.log("final paste: ",paste);
  return (
    <div className=" bg-rose-100 relative" >
    <PreviousPageButton name="back" />
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2  p-l-4 focus:outline-slate-300  text-center w-1/2  mx-auto bg-white"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button onClick={createPaste} className="p-2 rounded-2xl mt-2">
          {pasteId ? "update my paste" : "create my paste"}
        </button> */}
      </div>
      <div className="text-center w-1/2  mx-auto my-5">
        <textarea
          className="rounded-2xl mt-4,min-w-[500px] p-4 w-full  focus:outline-slate-300  bg-white"
          value={paste.content}
          placeholder="enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;