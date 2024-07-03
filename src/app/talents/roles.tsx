import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"


const Roles = () => {

  return (
    <section className="bg-white px-5 xl:px-28 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 px-8 pb-8">
          <Image src="/images/qa-engineer.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">QA ENGINEER</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>

        <div className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 px-8 pb-8">
          <Image src="/images/software-developers.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">SOFTWARE DEVELOPERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>

        <div className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 px-8 pb-8">
          <Image src="/images/product-manager.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">PRODUCT MANAGERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>

        <div className="flex flex-col items-center px-8 pb-8">
          <Image src="/images/ui-ux-designer.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">UI/UX DESIGNERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t-0 md:border-t md:border-gray-400">
        <div className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 p-8">
          <Image src="/images/business-analyst.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">BUSINESS ANALYST</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>

        <div className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 p-8">
          <Image src="/images/scrum-master.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">SCRUM MASTERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>

        <div className="flex flex-col items-center p-8">
          <Image src="/images/data-analyst.png" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg">DATA ANALYST</h4>
          <p className="text-center text-primary text-sm max-w-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </div>
      </div>
    </section>
  )
}

export default Roles