import Carousel from "@src/components/Carousel/Carousel";
import DiskGroup from "@src/assets/images/disks-group.png";
import Image from 'next/image'


const EventDocumentation = () => {
    return (
        <div className="flex flex-col items-center z-[0]">
            <p className="text-center text-[24px] mt-4 font-archivo sm:mt-8 md:mt-0 lg:mt-8 md:text-[64px]">Documentation</p>
            <Carousel />
            <div className="mb-[-90px] z-[-1]">
                <Image src={DiskGroup}/>
            </div>
        </div>
    );
}

export default EventDocumentation