import React, { FC } from 'react'
import TipIcon from '../Icon/TipIcon'

interface TitleProps {
  text: string
}

const defaultProps = {
  text: 'Strictly Only Maximum of Two Lines of Information'
}

const ToolTip: FC<TitleProps> = ({
  text
}: TitleProps & typeof defaultProps): JSX.Element => {
  return (
    <>
      <div className="box-border h-[52px] w-[328px] lg:h-[58px] lg:w-[406px] bg-gray200 border-solid border-pink400 border-[1px] rounded-2xl flex items-center">
        <TipIcon className="w-[24px] h-[24px] lg:w-[27px] lg:h-[27px] ml-[28.5px] mr-[28px]"></TipIcon>
        <div className="m-0">
          <h2 className="m-0 mt-[11px] mb-[11px] flex font-helvetica text-xs lg:text-base leading-[14px] lg:leading-[18px] text-gray600 font-normal">
            {text}
          </h2>
        </div>
      </div>
    </>
  )
}

ToolTip.defaultProps = defaultProps

export default ToolTip
