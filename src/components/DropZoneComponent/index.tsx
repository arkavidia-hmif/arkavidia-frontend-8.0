import { IoCloseSharp, IoChevronForward } from "react-icons/io5";
import { GoCloudUpload } from "react-icons/go";
import { Dispatch, DragEvent, FunctionComponent, SyntheticEvent } from "react";

import {useDropzone} from "react-dropzone";
import React, {useCallback} from 'react'

// type props = {
//   onClose: any;
// };

// const DropZoneComponent = ({ onClose }: props) => {
// const onDropFile = (e: DragEvent) => {
//   e.preventDefault();
//   const f = e.dataTransfer as DataTransfer
//   console.log(f.files);
// };

//   return (
//     <>  
//     <form> 
//     <p className="mt-4 text-xl font-semibold text-yellow-400 flex justify-center">UPLOAD FILES</p>
//     <p className="mb-4 text-sm text-yellow-400 flex justify-center">Upload the documents you want to submit</p>    
//       <div className="flex justify-center items-center w-full">
//         <div className = "box-border w-4/5">
//           <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-1000 h-300 bg-yellow-50 rounded-lg border-2 border-yellow-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-yellow-700 hover:bg-yellow-100 dark:border-yellow-600 dark:hover:border-gray-500 dark:hover:bg-yellow-600">
//               <div className="flex flex-col justify-center items-center pt-5 pb-6">
//                   <svg aria-hidden="true" className="mb-3 w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//                   <p className="mb-2 text-sm text-yellow text-yellow-400"> Drag & Drop your files here</p>
//                   <p className="font-semibold text-yellow-400">OR</p>
//                   <button className ="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 border border-yellow-400 rounded shadow">
//                     Browse Files
//                   </button>
//               </div>
//               <input id="dropzone-file" type="file" className="hidden"/>
//           </label>
//           <p className="mb-4 text-xs text-yellow-400">Upload the documents you want to submit</p>
//       </div> 
//       </div>
//     </form>      
//     </>
//   );
// };

// export default DropZoneComponent;


const DropZoneComponent: FunctionComponent <{setFile:Dispatch <any>}> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0])
  },[]);

  const { getRootProps, getInputProps} = useDropzone({
    onDrop, 
    multiple: false
    }); 
  
  return (
    <div className = "w-full p-4">
      <div {...getRootProps()} className="w-full p-4">
      <input {...getInputProps()}/>
        {/* <img src = "src/assets/images/free-file-icon-1453-thumb.png" alt = "folder" className = "h-16 w-16"/> */}
        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
        <p className="mt-4 text-xl font-semibold text-yellow-400 flex justify-center">UPLOAD FILES</p>
          <p className="mb-4 text-sm text-yellow-400 flex justify-center">Upload the documents you want to submit</p>    
             <div className="flex justify-center items-center w-full">
              <div className = "box-border w-4/5">
                 <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-300 bg-yellow-50 rounded-lg border-2 border-yellow-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-yellow-700 hover:bg-yellow-100 dark:border-yellow-600 dark:hover:border-gray-500 dark:hover:bg-yellow-600">
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg aria-hidden="true" className="mb-3 w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
      
                        <p className="mb-2 text-sm text-yellow text-yellow-400"> Drag & Drop your files here</p>
                        <p className="font-semibold text-yellow-400">OR</p>
                        <button className ="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 border border-yellow-400 rounded shadow">
                          Browse Files
                        </button>
                     </div>
                     <input id="dropzone-any" type="file" className="hidden"/>
                </label>
                 <p className="mb-4 text-xs text-yellow-400">Upload the documents you want to submit</p>
       </div> 
       </div>

      </div>
    </div>
  );
};


export default DropZoneComponent