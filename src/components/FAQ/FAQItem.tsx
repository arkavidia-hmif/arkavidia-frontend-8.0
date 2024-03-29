import { useState } from 'react'
import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
// import ArrowTopIcon from "@src/components/Icon/ArrowTopIcon";

export interface faqsProps {
  question: string
  answer: string | JSX.Element
}

const FAQItem = ({ question, answer }: faqsProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="py-4">
      <div
        className={`
                border
                border-black
                relative
                flex
                items-center
                w-full
                py-3
                px-5
                text-white text-left text-xl
                bg-black
                transition
                cursor-pointer ${isActive ? 'rounded-t-lg' : 'rounded-lg'}`}
        onClick={() => setIsActive(!isActive)}>
        <div className="font-['Varela-Round']">{question}</div>
        {/* With Animation */}
        <div>
          {
            <ArrowDownIcon
              size={28}
              className={`absolute bottom-1/4 right-0 mr-4 cursor-pointer ${
                isActive
                  ? 'transition-transform rotate-180 mr-3.5'
                  : 'transition-transform rotate-0'
              }`}
              color="#f9f9f9"
            />
          }
        </div>
      </div>
      {isActive && (
        <div className="bg-white py-3 px-5 border-x-2 border-b-2 border-black rounded-b-lg">
          {answer}
        </div>
      )}
    </div>
  )
}

export default FAQItem
