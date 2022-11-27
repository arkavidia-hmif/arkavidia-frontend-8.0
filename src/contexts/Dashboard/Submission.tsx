import ArrowDownIcon from '../../components/Icon/ArrowDownIcon'
import ArrowTopIcon from '../../components/Icon/ArrowTopIcon'

import { useState } from 'react'
import CustomButton from '@src/components/CustomButton/CustomButton'
import Upload from '@src/components/Upload'
import Dashboard from '@src/components/Navigation/Dashboard'
import { addSubmission } from '@src/services/submission'

const Submission = () : JSX.Element => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<Blob | null>();
  console.log(file);
  return (
    <Dashboard>
    <h3 className="font-archivo text-5xl text-shadow text-white">
    Submission
    </h3>
    <div className="flex flex-col items-center justify-center bg-white drop-shadow-md p-3 rounded-lg w-full select-none">
      <div
        onClick={() => {
          setOpen(prevOpen => !prevOpen)
        }}
        className="flex flex-row items-center justify-between cursor-pointer w-full"
      >
        <h6 className="font-black capitalize text-4xl font-archivo">1st Stage</h6>
        <button>
          {open ? <ArrowTopIcon size={28} /> : <ArrowDownIcon size={28} />}
        </button>
      </div>
      {open && (
        <div className="w-full">
        <h4 className="font-black font-archivo capitalize text-xl my-2">Upload file</h4>
        <p className="font-helvatica font-[12px]">Upload file pengerjaan dalam format .pdf dengan maksimal filesize 100mb</p>
        <div className="w-full flex flex-col items-center justify-start gap-4 m-1">
          <div className="w-full flex flex-col items-start">
            <Upload onFileUploaded={setFile} />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-5">
            <CustomButton bgColor="primary" size="normal">
              Submit
            </CustomButton>
          </div>
        </div>
      )}
    </div>
    </Dashboard>
  )
}


export default Submission