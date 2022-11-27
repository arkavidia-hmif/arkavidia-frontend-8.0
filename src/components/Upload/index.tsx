import React, {useCallback, useState} from 'react'
import Image from 'next/image'
import { useDropzone } from "react-dropzone";
import UploadIcon from "@src/assets/images/upload.svg"

interface SetterFile {
  onFileUploaded: (file: Blob) => void;
}

const Upload = ({onFileUploaded}: SetterFile) => {
  const onDrop = useCallback(
    (acceptedFiles: Blob[]) => {
      const file = acceptedFiles[0];
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    // accept: 'pdf/*',
  });

  return (
    <div {...getRootProps({ className: "dropzone" })} style={{ width: "100%" }}>  
      <div className="w-full px-[100px] py-12" 
          style={{ 
            background: "linear-gradient(180deg, rgba(254, 178, 14, 0.018) 0%, rgba(254, 178, 14, 0.06) 100%)", 
            border: "1px dashed rgba(254, 178, 14, 0.64)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            cursor: "pointer"
            }}
          >
        <div className="">
          <Image src={UploadIcon} />
        </div>
        <p className="text-[#feb20ea3] text-center my-2">
          Drag & Drop your files here <br /> OR <br />
        </p>
      <input {...getInputProps()} />
      <div className="bg-[#feb20ea3] text-white text-center px-12 py-2 cursor-pointer" style={{filter :"drop-shadow(0px 8px 16px rgba(254, 178, 14, 0.64))", borderRadius: "10px" }}>
        Browse File
      </div>
      </div>
    </div>
  )
}

export default Upload;