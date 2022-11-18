import CustomButton from "@src/components/CustomButton/CustomButton";
import { useState } from "react";

// Colors and Icon
import ArrowDownIcon from "../../components/Icon/ArrowDownIcon";


export default function Dropdown({header}:{header: string}) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] p-3 rounded-lg">
      <div className={`relative w-12/12 font-archivo text-[36px] text-black`}>
        <div
          onClick={() => {
            setOpen(!open);
          }} 
          className={`inline-block items-center w-full py-2 px-2 flex cursor-pointer`}>
          <ArrowDownIcon 
            size={35}
            className="absolute right-0 mr-2 cursor-pointer"
            color="#445F6F"
          />
          {header}
        </div>
        <div className={`mt-1 px-2 w-full overflow-y-auto transition-all ${open ? 'max-h-48' : 'max-h-0'}`}>
          <h1 className="text-[24px] font-archivo">Upload File</h1>
          <p className="text-[12px] font-normal font-helvatica text-gray600">Upload file pengerjaan dalam format .pdf dengan maksimal filesize 100mb</p>
          <div className="w-full h-28 text-center bg-red-400">REPLACE THIS DIV WITH FILE DROPZONE COMPONENT</div>
        </div>
      </div>
    </div>
  )
}