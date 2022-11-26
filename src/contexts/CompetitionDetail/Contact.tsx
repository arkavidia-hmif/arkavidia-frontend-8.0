import Image from 'next/image'
import Wa from '@src/assets/images/whatsapp.svg'
import Line from '@src/assets/images/line.svg'
import Email from '@src/assets/images/email.svg'
import CP from '@src/assets/images/contact-person.svg'

interface IContact {
  name: string;
  contact: string;
}

const Contact = ({line = [], wa = []} : {line: IContact[]; wa: IContact[];}): JSX.Element => {
  return (
    <div className="flex w-full flex-col px-20 py-[5rem] bg-white relative">
      <p className="text-[64px] mb-[2rem] font-archivo capitalize">Contact person</p>
      <div className="flex gap-x-5 items-center">
        {wa.length > 0 && (
        <div className="flex flex-col items-center justify-center px-16 py-10 bg-blue400 rounded-[24px] text-white w-[250px] h-[250px]">
            <div className="w-[85px]">
              <Image src={Wa} />
            </div>
            {wa?.map((c, idx) => (
            <div key={idx}>
              <p className="text-center font-medium">{c.contact}</p>
              <p className="text-center font-bold">{c.name}</p>
            </div>
            ))}
        </div>
        )}
        {line.length > 0 && (
        <div className="flex flex-col items-center justify-center px-16 py-10 bg-blue400 rounded-[24px] text-white w-[250px] h-[250px]">
            <div className="w-[85px]">
              <Image src={Line} />
            </div>
            {line?.map((c, idx) => (
            <div key={idx}>
              <p className="text-center font-medium">{c.contact}</p>
              <p className="text-center font-bold">{c.name}</p>
            </div>
            ))}
        </div>
        )}
        <div className="flex flex-col items-center justify-center px-16 py-10 bg-blue400 rounded-[24px] text-white w-[250px] h-[250px]">
            <div className="w-[85px]">
              <Image src={Email} />
            </div>
            <p className="text-center font-medium">competition@arkavidia.id</p>
        </div>
      </div>
      <div className="absolute bottom-[-10px] right-10">
        <Image src={CP} />
      </div>
    </div>
  )
}

export default Contact;