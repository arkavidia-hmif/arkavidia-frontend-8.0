import { useEffect, useState } from "react";

// Colors and Icon
import ArrowDownIcon from "../Icon/ArrowDownIcon";
import colours from "@src/utils/colors";

// Contoh Data
const listData = [
    { id: 1, value: "Small" },
    { id: 2, value: "Medium" },
    { id: 3, value: "Medium" },
    { id: 4, value: "Medium" },
    { id: 5, value: "Large" },
  ];

export default function Dropdown() {
  const [data, setData] = useState<any[]>();
  const [selectedId, setSelectedId] = useState<any[]>();
  const [open, setOpen] = useState(false);
  const selectedData = data?.find(d => d.id === selectedId); // use id, in case there are same data

  useEffect(() => {
    setData(listData);
  }, []);
  
  return (
    <div className={`relative w-36 font-normal lg:max-w-sm text-[${colours.blue300}]`}>
      <div
        onClick={() => {
          setOpen(!open);
        }} 
        className={`bg-[${colours.gray200}] inline-block align-middle w-full h-10 font-bold text-xs leading-5 py-2 px-2 flex rounded-md border border-gray-300 cursor-pointer`}>
        {selectedData ? selectedData.value : `${'\u00A0'}`}
        <ArrowDownIcon 
          size={20}
          className="absolute right-0 mr-2 cursor-pointer"
          color="#445F6F"
        />
      </div>
      <ul className={`absolute z-10 bg-[${colours.gray200}] mt-2 w-full overflow-y-auto divide-y-2 divide-gray-300 rounded-md outline-1 outline-gray-300 ${open ? 'max-h-48 outline' : 'max-h-0'}`}>
        {
          data?.map((d) => (
            <li 
              key={d?.id}
              className={`cursor-pointer py-2 px-4 w-full h-10 text-xs leading-5 hover:bg-gray-300
              ${d?.id === selectedId &&
              'bg-gray-300 font-bold'}`
              }
              onClick={() =>{
                if(d?.id !== selectedId) {
                  setSelectedId(d?.id);
                  setOpen(false);
                }
              }}  
            >
              <span className="inline-block align-middle">
                {d?.value}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}