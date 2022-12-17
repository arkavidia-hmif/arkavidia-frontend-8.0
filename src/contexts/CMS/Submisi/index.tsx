import TeamCMS from '@src/components/CMS/Team'
import CustomButton from '@src/components/CustomButton/CustomButton'
import Dropdown from '@src/components/Dropdown'
import { useState } from 'react'

function CMSSubmisi() {
  const [viewedCategory, setViewedCategory] = useState(
    undefined as undefined | string
  )
  return (
    <section className="w-full flex flex-col justify-start items-center gap-14">
      <div className="w-full flex justify-center items-start gap-9">
        <div className="flex-grow" />
        <Dropdown
          selectedData={viewedCategory}
          setSelectedData={setViewedCategory}
          data={['cvklbcvmbcv', 'dkvdfmlvdfmkvl']}
          noSelectedText="All Category"
        />
        <CustomButton bgColor="primary" size="normal" onClick={() => {}}>
          Download Participants
        </CustomButton>
      </div>
      <div className="flex flex-col w-full gap-10 items-center justify-start">
        <TeamCMS
          members={[]}
          paymentLink="fcfvbf0"
          proposalLink="dfsdsf"
          status="pass"
          teamID="klmdklv"
          teamName="Bruh"
        />
        <TeamCMS
          members={[]}
          paymentLink="fcfvbf0"
          proposalLink="dfsdsf"
          status="pass"
          teamID="klmdklv"
          teamName="Bruh"
        />
      </div>
    </section>
  )
}

export default CMSSubmisi
