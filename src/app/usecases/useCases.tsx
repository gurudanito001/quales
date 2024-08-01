
import Image from "next/image";
import Link from "next/link";



const UseCasesSection = ()=>{
  return(
    <section className="bg-neutral py-14 md:py-24">

        <header className="flex flex-col">
          <h3 className="text-center text-primary text-xl xl:text-2xl font-semibold">How we Supported:</h3>
          <p className="text-primary max-w-5xl mt-6 text-sm lg:text-lg text-center mx-auto font-light px-5 lg:px-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. </p>
        </header>

        <section className="px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">


          <article className="md:w-1/2 flex flex-col text-primary">
            <header className="flex flex-col">
              <h3 className="text-primary text-2xl xl:text-4xl font-semibold border-b border-primary">Core</h3>
            </header>
            <h6 className="font-semibold lg:text-lg">Project: Recova</h6>
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Quales Consulting collaborated with Qore to successfully develop and launch their innovative product, Recova. Recova is designed to provide comprehensive solutions for the full automation of lending activities, encompassing everything from origination to guaranteed recovery.
            </p>

            <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">The project focused on two main sub-products:</p>
            <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
              <li>Recova Multi-bank Direct Debit</li>
              <li>Recova Lending Automation System</li>
            </ul>
            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 hidden md:inline-flex">Read More</Link>
          </article>

          <figure className=" md:w-1/2 mb-10 md:mb-0 flex flex-col ">
            <Image
              src={`/images/our-community.svg`}
              className="w-100"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={700}
              height={700}
            />

            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 md:hidden">Read More</Link>
          </figure>

        </section>

        <section className="px-5 lg:px-28 py-10 flex flex-col-reverse md:flex-row items-center">

          <figure className=" md:w-1/2 mb-10 md:mb-0 flex flex-col ">
            <Image
              src={`/images/our-community.svg`}
              className="w-100"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={700}
              height={700}
            />
            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 md:hidden">Read More</Link>
          </figure>

          <article className="md:w-1/2 flex flex-col text-primary">
            <header className="flex flex-col">
              <h3 className="text-primary text-2xl xl:text-4xl font-semibold border-b border-primary">Zone</h3>
            </header>
            <h6 className="font-semibold lg:text-lg">Project: Agency Banking V2</h6>
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Quales Consulting collaborated with Zone to develop and launch their advanced product, Agency Banking V2. This innovative solution employs a centralized switch to streamline card-based and cardless transactions among financial institutions and other financial intermediaries.
            </p>

            <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">The project focused on several key features:</p>
            <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
              <li>Immediate Transaction Processing and Settlement</li>
              <li>Fraud and Dispute Management</li>
            </ul>
            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 hidden md:inline-flex">Read More</Link>
          </article>
        </section>

        <section className="px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">
          <article className="md:w-1/2 flex flex-col text-primary">
            <header className="flex flex-col">
              <h3 className="text-primary text-2xl xl:text-4xl font-semibold border-b border-primary">Signature</h3>
            </header>
            <h6 className="font-semibold lg:text-lg">Project: Corporate Internet Banking (CIB)</h6>
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Signature partnered with Quales Consulting to develop its Corporate Internet Banking (CIB) platform, an online financial system tailored specifically for businesses and corporations. The platform is designed to enable businesses to conduct various financial transactions and manage their banking activities securely through an online interface.
            </p>

            <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">The CIB platform focuses on:</p>
            <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
              <li>Secure financial transactions for businesses.</li>
              <li>Comprehensive management of banking activities online.</li>
            </ul>
            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 hidden md:inline-flex">Read More</Link>
          </article>

          <figure className=" md:w-1/2 mb-10 md:mb-0 flex flex-col ">
            <Image
              src={`/images/our-community.svg`}
              className="w-100"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={700}
              height={700}
            />

            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 md:hidden">Read More</Link>
          </figure>

        </section>
    </section>
    
  )
}

export default UseCasesSection