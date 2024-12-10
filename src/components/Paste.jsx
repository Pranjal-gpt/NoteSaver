import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { FaRegEdit, FaRegCopy } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";

import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";

const paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="bg-rose-100 my-5 h-[85vh] overflow-hidden">
      <input
        className="p-2 mx-5 rounded-xl min-w-[600px] mt-5 "
        type="search"
        placeholder="Serach here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5 w-[70vw] overflow-y-auto h-[70vh] ">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="border-4 rounded-xl p-5 max-w-[70vw] flex align-top justify-between bg-white mx-5"
                key={paste?._id}
              >
              <div className="box1 w-1/2">
                  <div className="font-bold text-xl py-2 break-words">
                    {paste.title.substring(0, 50)}
                  </div>

                  <div className="text-lg break-words">
                    {paste.content.substring(0, 50)}
                  </div>
              </div>

                
                <div className=" box2 relative -top-5" >
                
                  <div className="flex flex-row gap-4 place-content-evenly ">
                    <button title="Edit">
                      <a href={`/?pasteId=${paste?._id}`}>
                        <FaRegEdit />
                      </a>
                    </button>

                    <button title="View">
                      <a href={`/pastes/${paste?._id}`}>
                        <RxEyeOpen />
                      </a>
                    </button>
                    <button title="Delete" onClick={() => handleDelete(paste?._id)}>
                      <MdOutlineDeleteForever className="text-2xl" />
                    </button>
                    <button title="Copy"
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("copied to clipboard");
                      }}
                    >
                      <FaRegCopy size="1.2em" />
                    </button>
                    {/* homework:share button ka logic */}
                    <button title="Share"
              onClick={() => {
                const shareData = {
                  title: paste.title || "Paste Title",
                  text: paste.content || "Paste Content",
                  url: `${window.location.origin}/pastes/${paste?._id}`,
                };

                if (navigator.share) {
                  navigator
                    .share(shareData)
                    .then(() => toast.success("Shared successfully"))
                    .catch((err) =>
                      toast.error("Sharing failed: " + err.message)
                    );
                } else {
                  navigator.clipboard.writeText(shareData.url);
                  toast.success("Link copied to clipboard");
                }
              }}
            >
              <FaRegShareSquare size="1.2em" />
            </button>
                  </div>

                  <div className="text-right">{new Date(paste.createdAt).toLocaleString()}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default paste;
