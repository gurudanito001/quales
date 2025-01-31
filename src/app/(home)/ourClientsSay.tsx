import Image from "next/image"

const OurClientsSay = () => {

  return (
    <section className="bg-white px-5 xl:px-28">
      <header className="flex">
        <h2 className="text-xl md:text-2xl mx-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text py-10">What our Clients Say About Us</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" flex flex-col items-center">
          <div className="w-64 md:w-60 xl:w-80 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Prior to Quales supporting Seamfix, we had a very low rate of automation in the course of building our apps, this slowed regression efforts in preparation for our releases and we faced the danger of not responding to our customer needs in a timely manner. Since we got Quales onboard, in just about three months, automation efforts increased significantly which led to quick internal feedback and resolution of issues. This has helped us win back our partners’ trust in responding in an agile manner to their demands.
            </p>
            <h5 className="text-primary mt-7 text-center font-550">Nnanna Madu</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Head of Engineering Seamfix</h6>
            <figure className="mt-5">
            <Image
              src={`/images/seamfix.svg`}
              className="max-h-14"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Seamfix Logo"
              width={250}
              height={100}
            />
            </figure>
            
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className=" w-64 md:w-60 xl:w-80 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Our collaboration with Quales Consulting has been highly beneficial, as they have provided us with skilled and experienced Quality Assurance Engineers who excel in software testing. Their contributions
              have significantly enhanced our product delivery, enabling us to achieve market readiness in record time.Quales Consulting has consistently demonstrated reliability, resourcefulness, efficiency, and effectiveness
              in all our interactions with them
            </p>
            <h5 className="text-primary mt-auto text-center font-550">Adepegba Oduntan</h5>
            <h6 className="text-primary mt-1 text-center text-xs">C.E.O , SME CAPITAL</h6>
            <figure className="mt-5">
              <Image
                src={`/images/sme-capital.svg`}
                className="max-h-14"
                style={{ height: "auto", objectFit: "contain" }}
                alt="Zone Logo"
                width={250}
                height={100}
              />
            </figure>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className=" w-64 md:w-60 xl:w-80 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Working with engineers from Quales has been incredibly rewarding and has helped us to achieve our testing goals faster. Their expertise and dedication to quality have been instrumental in streamlining our processes. We have seen a significant improvement in our testing efficiency and overall project delivery times. The team at Quales consistently goes above and beyond to ensure our needs are met. We highly recommend their services to any organization looking to enhance their QA capabilities.
            </p>
            <h5 className="text-primary mt-auto text-center font-550">Fabian Amicki</h5>
            <h6 className="text-primary mt-1 text-center text-xs">QA Manager, Qore </h6>
            <figure className="mt-5">
              <Image
                src={`/images/q-core.svg`}
                className="max-h-12"
                style={{ height: "auto", objectFit: "contain" }}
                alt="Qore logo"
                width={250}
                height={100}
              />
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurClientsSay