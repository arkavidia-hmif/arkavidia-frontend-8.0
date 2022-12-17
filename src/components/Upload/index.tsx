import React, { useCallback } from 'react'
import Image from 'next/image'
import { useDropzone, Accept } from 'react-dropzone'
import UploadIcon from '@src/assets/images/upload.svg'

interface UploadProps {
  maxSize: number
  type: 'image' | 'pdf'
  onFileUploaded: (file: Blob) => void
}

const Upload = ({
  maxSize = 2,
  type = 'image',
  onFileUploaded
}: UploadProps) => {
  const sizeValidator = (file: Blob) => {
    if (file.size > maxSize * 1000000) {
      return {
        code: `Ukuran melebihi batas`,
        message: `Ukuran file lebih dari ${maxSize} MB`
      }
    }
    return null
  }
  const onDrop = useCallback(
    (acceptedFiles: Blob[]) => {
      const file = acceptedFiles[0]
      onFileUploaded(file)
    },
    [onFileUploaded]
  )

  const getAcceptType = (): Accept => {
    switch (type) {
      case 'image':
        return {
          'image/*': ['.jpeg', '.jpg', '.png']
        }
      case 'pdf':
        return {
          'application/pdf': ['.pdf']
        }
      default:
        return {}
    }
  }

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      onDrop,
      accept: getAcceptType(),
      validator: sizeValidator,
      maxFiles: 1
    })

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size / 1000000} MB
    </li>
  ))

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.name}>
      {file.name} - {file.size / 1000000} MB
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ))

  return (
    <div {...getRootProps({ className: 'dropzone' })} style={{ width: '100%' }}>
      <div
        className="w-full px-[100px] py-12"
        style={{
          background:
            'linear-gradient(180deg, rgba(254, 178, 14, 0.018) 0%, rgba(254, 178, 14, 0.06) 100%)',
          border: '1px dashed rgba(254, 178, 14, 0.64)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          cursor: 'pointer'
        }}>
        {acceptedFiles.length > 0 ? (
          <div className="text-center my-2">{acceptedFileItems}</div>
        ) : (
          <>
            {fileRejections.length > 0 ? (
              <div className="text-red200 text-center my-2">
                {fileRejectionItems}
              </div>
            ) : (
              <>
                <div className="">
                  <Image src={UploadIcon} />
                </div>
                <p className="text-[#feb20ea3] text-center my-2">
                  Drag & Drop your files here <br /> OR <br />
                </p>
                <div
                  className="bg-[#feb20ea3] text-white text-center px-12 py-2 cursor-pointer"
                  style={{
                    filter:
                      'drop-shadow(0px 8px 16px rgba(254, 178, 14, 0.64))',
                    borderRadius: '10px'
                  }}>
                  Browse File
                </div>
              </>
            )}
          </>
        )}
        <input {...getInputProps()} />
      </div>
    </div>
  )
}

export default Upload
