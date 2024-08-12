"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const UseCasesSection = ()=>{
  const [showCoreExtra, setShowCoreExtra] = useState(false);
  const [showZoneExtra, setShowZoneExtra] = useState(false);
  const [showSignatureExtra, setShowSignatureExtra] = useState(false);

  return(
    <section className="bg-neutral py-14 md:py-24">

        <header className="flex flex-col">
          <h3 className="text-center text-primary text-xl xl:text-2xl font-550">How we Supported:</h3>
          <p className="text-primary max-w-7xl mt-6 text-sm lg:text-lg text-center mx-auto font-light px-5 lg:px-28">Discover how Quales Consulting has empowered clients with cutting-edge solutions through our detailed use cases. Explore the success stories that highlight our expertise in quality assurance and software testing. </p>
        </header>

        <section className="px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">
          <article className="md:w-1/2 flex flex-col text-primary md:pr-14 xl:pr-20">
            <header className="flex flex-col">
              <h3 className="text-primary text-2xl xl:text-4xl font-550 border-b border-primary">Qore</h3>
            </header>
            <h6 className="font-550 lg:text-lg">Project: Recova</h6>
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Quales Consulting collaborated with Qore to successfully develop and launch their innovative product, Recova. Recova is designed to provide comprehensive solutions for the full automation of lending activities, encompassing everything from origination to guaranteed recovery.
            </p>

            <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">The project focused on two main sub-products:</p>
            <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
              <li>Recova Multi-bank Direct Debit</li>
              <li>Recova Lending Automation System</li>
            </ul>

            {showCoreExtra &&
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Our highly skilled QA engineers played a pivotal role in ensuring Recova&apos;s robustness and reliability. We ensured that Recova&apos;s functionalities met the highest standards through meticulous testing and quality assurance processes, enhancing its performance and user experience.
              With Recova, Qore can now offer its clients a streamlined, automated solution for managing lending activities. This has not only improved operational efficiency but also provided a secure and scalable platform for growth.<br/>
              Testimonial: “Working with engineers from Quales has been rewarding and has helped us to achieve our testing goals faster.” - Qore
            </p>}
            <button onClick={()=>setShowCoreExtra( prevState => !prevState)} className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 hidden md:inline-flex">{showCoreExtra ? "Show Less" : "Read More"}</button>
          </article>

          <figure className="md:w-1/2 mb-10 mt-5 md:mt-0 md:mb-0 flex flex-col ">
            <Image
              src={`/images/qore-screenshot.png`}
              className="w-100"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Qore website screenshot"
              width={700}
              height={700}
            />
            <button onClick={()=>setShowCoreExtra( prevState => !prevState)} className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 inline-flex md:hidden">{showCoreExtra ? "Show Less" : "Read More"}</button>
          </figure>
        </section>

        <section className="px-5 lg:px-28 py-10 flex flex-col-reverse md:flex-row items-center">

          <figure className=" md:w-1/2 mb-10 md:mb-0 flex flex-col">
            <Image
              src={`/images/zone-screenshot.png`}
              className="w-100"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Zone website screenshot"
              width={700}
              height={700}
            />
            <button onClick={()=>setShowZoneExtra(prevState => !prevState)} className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 inline-flex md:hidden">{showZoneExtra ? "Show Less" : "Read More"}</button>
          </figure>

          <article className="md:w-1/2 flex flex-col text-primary md:pl-14 xl:pl-20">
            <header className="flex flex-col">
              <h3 className="text-primary text-2xl xl:text-4xl font-550 border-b border-primary">Zone</h3>
            </header>
            <h6 className="font-550 lg:text-lg">Project: Agency Banking V2</h6>
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Quales Consulting collaborated with Zone to develop and launch their advanced product, Agency Banking V2. This innovative solution employs a centralized switch to streamline card-based and cardless transactions among financial institutions and other financial intermediaries.
            </p>

            <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">The project focused on several key features:</p>
            <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
              <li>Immediate Transaction Processing and Settlement</li>
              <li>Fraud and Dispute Management</li>
              {showZoneExtra && <>
                <li>Comprehensive Agent Services</li>
                <li>Effective Terminal Management and Secure Key Exchanges</li>
              </>}
            </ul>

            {showZoneExtra && <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">
              Quales&apos; skilled QA engineers played a vital role in ensuring the product&apos;s exceptional quality, delivering rigorous functionality and performance testing to guarantee its robustness and reliability.
              Functionality Testing: Conducted in two test environments, FCMB and UBA.
              Staging Testing: Performed in two staging bank environments, GTB and WEMA.
              Performance Testing: Included load and stress tests in dedicated load test environments.
              With Agency Banking V2, Zone can now offer a seamless, efficient solution for managing financial transactions. This not only improves operational efficiency but also provides a secure and scalable platform for growth.
            </p>}
            <button onClick={()=>setShowZoneExtra(prevState => !prevState)} className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 hidden md:inline-flex">{showZoneExtra ? "Show Less" : "Read More"}</button>
          </article>
        </section>

        <section className="px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">
          <article className="md:w-1/2 flex flex-col text-primary md:pr-14 xl:pr-20">
            <header className="flex flex-col">
              <h3 className="text-primary text-2xl xl:text-4xl font-550 border-b border-primary">Signature Bank</h3>
            </header>
            <h6 className="font-550 lg:text-lg">Project: Corporate Internet Banking (CIB)</h6>
            <p className="text-primary max-w-600 mt-3 text-sm lg:text-lg font-light">
              Signature partnered with Quales Consulting to develop its Corporate Internet Banking (CIB) platform, an online financial system tailored specifically for businesses and corporations. The platform is designed to enable businesses to conduct various financial transactions and manage their banking activities securely through an online interface.
            </p>

            <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">The CIB platform focuses on:</p>
            <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
              <li>Secure financial transactions for businesses.</li>
              <li>Comprehensive management of banking activities online.</li>
              {showSignatureExtra && <>
                <li>User-friendly interface for seamless operations</li>
              </>}
            </ul>

            {showSignatureExtra && <>
              <p className="max-w-600 mt-3 text-sm lg:text-lg font-light">
                Our QA engineers played a vital role in ensuring the product&apos;s reliability through comprehensive functionality and performance testing. We tested the platform&apos;s features to guarantee it meets the highest standards, ensuring smooth, secure, and efficient financial operations for Signature&apos;s clients.
                Results:
              </p>

              <ul className="list list-disc px-6 max-w-600 mt-3 text-sm lg:text-lg font-light">
                <li>Enhanced security and reliability of financial transactions.</li>
                <li>Improved efficiency in managing banking activities.</li>
                <li>Increased user satisfaction with the platform&apos;s performance and usability</li>
              </ul>
            </>}
            <button onClick={()=>setShowSignatureExtra( prevState => !prevState)} className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 hidden md:inline-flex">{showSignatureExtra ? "Show Less" : "Read More"}</button>

          </article>

          <figure className=" md:w-1/2 mb-10 mt-5 md:mt-0 md:mb-0 flex flex-col ">
            <Image
              src={`/images/signature-screenshot.png`}
              className="w-100"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Signature website screenshot"
              width={700}
              height={700}
            />
            <button onClick={()=>setShowSignatureExtra( prevState => !prevState)} className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8 max-w-48 inline-flex md:hidden">{showSignatureExtra ? "Show Less" : "Read More"}</button>
          </figure>

        </section>
    </section>
    
  )
}

export default UseCasesSection