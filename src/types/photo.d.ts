export interface AddPhotoReq {
  participant_id: number
  type: string
  file: Blob | File
}
