import Dropdown from './Dropdown'
import Dashboard from '@src/components/Navigation/Dashboard'

const Submission = () => {
  return (
    <>
      <Dashboard>
        <h3 className="font-archivo text-5xl text-shadow text-white">
          Submission
        </h3>
        <Dropdown header={'1st Stage'} />
        <Dropdown header={'2nd Stage'} />
        <Dropdown header={'3rd Stage'} />
      </Dashboard>
    </>
  )
}

export default Submission
