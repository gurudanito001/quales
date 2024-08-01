


import Image from "next/image"

const ExecutionProcess = () => {

  return (
    <section className="bg-white px-5 lg:px-28 py-8">
      <h3 className="text-center text-xl font-semibold mb-3 text-primary">Our Execution Process</h3>
      <p className="text-xs md:text-sm text-center text-primary max-w-550 mx-auto">
        With 8 years plus in the industry and experience supporting multiple tech companies,
        there are multiple ways Quales is able to support
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-20 gap-5">
        <div className="flex flex-col items-center">
          <div className=" w-72 p-10 md:w-56 md:p-6 lg:p-10 xl:w-96 h-full flex flex-col items-center bg-neutral sm:p-12 rounded-3xl mb-5 shadow mx-auto md:ml-auto md:mr-0">
            <Image src="/images/faculty.svg" className="mx-auto w-8 h-8" width={40} height={40} objectFit="contain" alt="Calendar Icon" />
            <h6 className="text-primary text-md md:text-xl mt-4 text-center font-semibold">Experienced Faculty </h6>
            <p className="text-primary text-xs md:text-sm mt-3 text-center">Faculty with 24+ years of experience in the field— in Africa & abroad.</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" w-72 p-10 md:w-56 md:p-6 lg:p-10 xl:w-96 h-full flex flex-col items-center bg-neutral sm:p-12 rounded-3xl mb-5 shadow mx-auto md:ml-auto md:mr-0">
            <Image src="/images/learning.svg" className="mx-auto w-8 h-8" width={40} height={40} objectFit="contain" alt="Calendar Icon" />
            <h6 className="text-primary text-md md:text-xl mt-4 text-center font-semibold"> Learning & Development  </h6>
            <p className="text-primary text-xs md:text-sm mt-3 text-center">Engineers continue to get up-to-date training and support in the discharge of their duties.</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" w-72 p-10 md:w-56 md:p-6 lg:p-10 xl:w-96 h-full flex flex-col items-center bg-neutral sm:p-12 rounded-3xl mb-5 shadow mx-auto md:ml-auto md:mr-0">
            <Image src="/images/scale.svg" className="mx-auto w-8 h-8" width={40} height={40} objectFit="contain" alt="Calendar Icon" />
            <h6 className="text-primary text-md md:text-xl mt-4 text-center font-semibold">Speed to Scale </h6>
            <p className="text-primary text-xs md:text-sm mt-3 text-center">Need 1 Mid level or Senior Engineers? We are able to scale with you as your needs evolve.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-7">
        <div className="flex flex-col items-center md:ml-auto">
          <div className=" w-72 p-10 md:w-56 md:p-6 lg:p-10 xl:w-96 h-full flex flex-col items-center bg-neutral sm:p-12 rounded-3xl mb-5 shadow mx-auto md:ml-auto md:mr-0">
            <Image src="/images/support.svg" className="mx-auto w-8 h-8" width={40} height={40} objectFit="contain" alt="Calendar Icon" />
            <h6 className="text-primary text-md md:text-xl mt-4 text-center font-semibold">Strong Support Community </h6>
            <p className="text-primary text-xs md:text-sm mt-3 text-center">8 years of Quales Alumni engaged at  several tech companies including Flutterwave, Paystack (Stripe), Interswitch, Seamfix, Appzone, ARCA etc.</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:mr-auto">
          <div className=" w-72 p-10 md:w-56 md:p-6 lg:p-10 xl:w-96 h-full flex flex-col items-center bg-neutral sm:p-12 rounded-3xl mb-5 shadow mx-auto md:ml-auto md:mr-0">
            <Image src="/images/performance.svg" className="mx-auto w-8 h-8" width={40} height={40} objectFit="contain" alt="Calendar Icon" />
            <h6 className="text-primary text-md md:text-xl mt-4 text-center font-semibold">Performance  Management </h6>
            <p className="text-primary text-xs md:text-sm mt-3 text-center">We will have regular check-ins with the head of Engineering and conduct regular knowledge sessions for your entire team. We also have a flexible replacement policy.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ExecutionProcess