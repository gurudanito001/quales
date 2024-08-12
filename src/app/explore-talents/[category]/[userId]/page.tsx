import Link from "next/link";
import NavBar from "@/app/(home)/navbar";
import Footer from "@/app/(home)/footer";
import type { Metadata, ResolvingMetadata } from 'next';


const formatCategory = (category: string) => {
  switch (category) {
    case "qa-engineers":
      return "QA Engineers";
    case "software-developers":
      return "Software Developers";
    case "product-managers":
      return "Product Managers";
    case "ui-ux-designers":
      return "UI UX Designers";
    case "business-analysts":
      return "Business Analytics";
    case "scrum-masters":
      return "Scrum Masters";
    case "data-analysts":
      return "Data Analysts";
    default:
  }
}
 
type Props = {
  params: { category: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const category = params.category
 
  return {
    title: `Abati Adeotan Senayon | ${formatCategory(category)} | Quales Consulting`,
    description: "As a certified software test engineer with a passion for research, I am highly detail-oriented and quality-focused. I possess excellent technical and problem-solving skills and have a deep understanding of both software development life cycle and software testing life cycle.",
  }
}







export default async function Page({ params }: { params: { category: string, userId: string } }) {
 
  return (

    <>
      <NavBar />
      <section className="bg-white px-5 xl:px-28 mt-10 mb-20">

        <div className="breadcrumbs text-sm mb-16">
          <ul>
            <li><Link href="/explore-talents" className="text-primary lg:text-xl font-light">Talents</Link></li>
            <li><Link href={`/explore-talents/${params?.category}`} className="text-primary lg:text-xl capitalize font-light">{formatCategory(params?.category)}</Link></li>
            <li><Link href={`/explore-talents/${params?.category}/${params?.userId}`} className="text-primary font-550 lg:text-xl capitalize">Talent Information</Link></li>
          </ul>
        </div>


        <div className=" flex flex-col lg:flex-row gap-10">
          <figure className="flex justify-center lg:justify-start">
            <span className="h-72 w-64 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center rounded-lg mb-3">
            </span>
          </figure>

          <div>
            <article className="text-primary">
              <h3 className="text-2xl mb-3 uppercase">Abati Adeotan Senayon</h3>
              <p className="font-light">
                As a certified software test engineer with a passion for research, I am highly detail-oriented and quality-focused. I possess  excellent technical and problem-solving skills and have a deep understanding of both software development life cycle and  software  testing  life  cycle.  I  am  driven  to  identify  and  analyze  complex  situations  and  develop  innovative  solutions  to  overcome  them. My experience includes extensive  testing of web-based and mobile applications, and  I am committed  to  ensuring that all products meet the highest standards of quality and performance
              </p>
            </article>
            <hr className="border-primary mt-5"/>

            <article className="mt-2">
              <div className="w-auto border-r border-r-primary text-primary px-3 my-3 inline-block">
                <h3 className="font-550">Currently working with</h3>
                <p className="font-light">APPZONE, NIGERIA</p>
              </div>
              <div className="w-auto border-r border-r-primary text-primary px-3 my-3 inline-block">
                <h3 className="font-550">Location</h3>
                <p className="font-light">Lagos, Nigeria</p>
              </div>
              <div className="w-auto text-primary px-3 my-3 inline-block">
                <h3 className="font-550">Geographical map location</h3>
                <p className="font-light">Lorem Ipsum</p>
              </div>
            </article>

            <hr className="border-primary mt-2"/>

            <article className="px-3 py-4">
              <h3 className="font-550 text-primary mb-4">Tech Stack</h3>
              <div>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Postman</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">VSCode</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Cypress</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">JMeter</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Microsoft Excel</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Microsoft PowerPoint</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Canva</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">CorelDraw</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Figma</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Slack</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Trello</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">G-Suite</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Microsoft Office</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Workplace</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Forticlient</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Anydesk</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Microsoft Remote</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Photoshop</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Autodesk</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Sketch</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Illustrator</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">HTML5</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">CSS</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Dreamweaver</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">WordPress</span>
              </div>
            </article>

            <hr className="border-primary"/>

            <article className="px-3 py-4">
              <h3 className="font-550 text-primary mb-4">Top Skills</h3>
              <div>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Excellent communication</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Attention to details</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Resource Management</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Problem and Conflict Resolution </span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Strong Listening Skills</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Risk Calculation Skills </span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Empathy and Flexibility</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Team and Group Oriented</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Knowledge of Quality Standards</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Curiosity and Critical Thinking </span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Basic  Knowledge  of  Common  Languages (Coding) </span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Discipline and Accuracy</span>

                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Technical knowledge</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Strong Analytical Skill</span>
              </div>
            </article>

            <hr className="border-primary"/>

            <h3 className="font-550 text-primary my-4 px-3">Employment History</h3>




            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
              <header className="flex">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>APPZONE, NIGERIA </h6>
                <time className="ml-auto text-primary text-xs font-light inline-block max-w-28 md:max-w-56">January 2023 - Present </time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start mb-5">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className="font-light mb-4">
                      Designed,  developed,  and  executed  automated  test  scripts  using  JMeter  for  load,  performance,  and  stress  testing.  These  tests  were  designed  to  simulate  high  volumes  of  traffic  to  the  application  and  identify  any  performance issues  or bottlenecks. The scripts were  regularly maintained and updated  to ensure  that  they  remained effective as the application evolved
                    </li>

                    <li className="font-light mb-4">
                      Developed Automated test using Cypress and Katalon, writing test scripts, setting up test data, also to validate  the  functionality  of  the  application.  Bugs  were  identified  and  recorded  using  cypress  screenshots  for  bug  reproduction and detailed steps, this includes analyzing test results; average response time, error rates and  throughputs to identify bottlenecks and areas for improvement. 
                    </li>

                    <li className=" font-light mb-4">
                      Maintained SQL queries to ensure data integrity and consistency of the application. These queries were used  to verify that the data being generated by the application was accurate and consistent with the expected results.  Any discrepancies were reported and investigated to ensure that the application was functioning correctly.
                    </li>

                    <li className=" font-light mb-4">
                      Deployed services and pods using Kubernetes, verify that application is deployed correctly, and proper tracking  of  version  numbers  are  put  in  place.  Worked  to  ensure  all  necessary  components  are  running  and  the  deployment is  scalable and  resilient. Also had a  continuous and delivery  (CI/CD), working  closely with  the  development and DevOps teams to integrate testing into the CI/CD pipeline. 
                    </li>

                    <li className="font-light mb-4">
                      Verified API requests and responses using Swagger. Swagger was used  to document  the API endpoints and  ensure that they were being used correctly. This helped to identify any issues with the API and ensure that it  was functioning as expected. 
                    </li>

                    <li className="font-light mb-4">
                      Reported and  tracked defects  found during  testing and collaborated with  the development  team  to  resolve  them. Defects were reported using a bug tracking system and tracked until they were resolved. Collaboration  with the development team was critical to ensuring that defects were resolved quickly and effectively.
                    </li>

                    <li className=" font-light mb-4">
                      Created and executed test plans for financial transactions, including debit and credit posting. These test plans  were designed to ensure that financial transactions were processed accurately and securely. They included a  variety of scenarios to test different aspects of the transaction process, such as error handling, security, and  performance. 
                    </li>

                    <li className=" font-light mb-4">
                      Identified and reported bugs and issues related to transaction security. Security was a critical aspect of financial  transactions, and any issues were reported and investigated immediately to ensure that the application was  secure. 
                    </li>


                    <li className="font-light mb-4">
                      Ensured  that  financial  software  products met  the  highest  quality  standards.  Quality  was  a  top  priority  for  financial software, and all testing was designed to ensure that the application met the highest standards for  accuracy, security, and performance. 
                    </li>

                    <li className=" font-light mb-4">
                      Conducted staging tests for front-end and back-end systems, performance (load) tests for financial applications  and  API  endpoints,  and  functional  tests  for  UI  design implementations  for  fund  transfer.  These  tests  were  designed to ensure that the application was functioning correctly, and that the user experience was optimal.  They included a variety of scenarios and were regularly updated to ensure that they remained effective. 
                    </li>

                    <li className=" font-light mb-4">
                      Prepared test plan and test case for NIBBS - IDRS implementation as required, to ensure proper management  of disputes and reversal. 
                    </li>
                  </ul>
                </div>
              </li>


              <header className="flex">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>QUALES CONSULTING, NIGERIA  </h6>
                <time className="ml-auto text-primary text-xs font-light inline-block max-w-28 md:max-w-56">September 2022 – January 2023</time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start mb-5">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className=" font-light mb-4">
                      Appraised  Business  Requirement  Document  (BRD)  and  developed  test  scenarios  and  cases  for  products.  Reviewed the BRD to understand the requirements for the product and developed test scenarios and cases to  ensure that the product met those requirements. This helped to ensure that the product was functional and  met the needs of the business. 
                    </li>

                    <li className=" font-light mb-4">
                      Executed manual  tests and analyzed  test  results ensuring  high  test  coverage and  timely delivery, manually  tested the product to ensure that it worked as expected and analyzed the results to identify any issues. This  helped to ensure that the product was of high quality and delivered on time. 
                    </li>

                    <li className=" font-light mb-4">
                      Analyzed  data  in  Microsoft  Excel  using  tools  such  as  VLOOKUP,  Clean,  Trim,  Match,  Index,  Ifs,  etc.  Used  Microsoft Excel to analyze data and used various tools such as VLOOKUP, Clean, Trim, Match, Index, Ifs, etc. to  make the analysis more efficient and effective. This helped to ensure that the data was accurate and could be  used to make informed decisions. 
                    </li>

                    <li className=" font-light mb-4">
                      Deployed JIRA for test case management, create assign and track defects and collaborate with the development  team for timely fix and retest. I used JIRA to manage test cases, create and assign defects, and collaborate with  the development team to ensure that defects were fixed and retested in a timely manner. This helped to ensure  that the product was of high quality and delivered on time. 
                    </li>
                  </ul>
                </div>
              </li>




              <header className="flex">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>BRIJ LOGISTICS, NIGERIA/USA</h6>
                <time className="ml-auto text-primary text-xs font-light inline-block max-w-28 md:max-w-56">April 2020 – October 2020</time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start mb-5">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className=" font-light mb-4">
                      Successfully designed the User and Admin Dashboard, Signup, Login module for the Logistics App, to ship goods  overseas leading to an improved user experience for stakeholders. Designed the user and admin dashboard,  signup, and login modules  for a logistics app to ship goods overseas. This improved the user experience  for  stakeholders and ensured that the app was easy to use and navigate.  
                    </li>

                    <li className=" font-light mb-4">
                      Participated in researching, defining, implementing, and ensuring inclusiveness  for all users. Participated in  researching,  defining,  implementing,  and  ensuring  inclusiveness  for  all  users  to  ensure  that  the  app  was  accessible to everyone. 
                    </li>

                    <li className=" font-light mb-4">
                      Worked on User Stories to understand the user&apos;s flow of the application to give the user a seamless experience  while using the application. Worked on user stories to understand the user&apos;s flow of the application to give the  user a seamless experience while using the application. This helped to ensure that the app was intuitive and  easy to use. 
                    </li>

                    <li className=" font-light mb-4">
                      Deployed JIRA for test case management, create assign and track defects and collaborate with the development  team for timely fix and retest. I used JIRA to manage test cases, create and assign defects, and collaborate with  the development team to ensure that defects were fixed and retested in a timely manner. This helped to ensure  that the product was of high quality and delivered on time. 
                    </li>
                  </ul>
                </div>
              </li>




              <header className="flex">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>ABAHAM ARCHITECTURAL CONSULT, NIGERIA </h6>
                <time className="ml-auto text-primary text-xs font-light inline-block max-w-28 md:max-w-56">March 2019 – August 2020</time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start mb-5">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className=" font-light mb-4">
                      Take overall responsibility of all operational tasks on ongoing projects and ensure compliance of procedures  and  standard  of  work  and  materials  are  being  met. Took  overall  responsibility  of  all  operational  tasks  on  ongoing  projects  and  ensured  that  procedures  and  standards  of  work  and materials  were  being met.  This  helped to ensure that projects were completed to a high standard.  
                    </li>

                    <li className=" font-light mb-4">
                      Managed  and monitored  workers,  vendors,  and materials  to  ensure  quality  and  timely  delivery  of  what is  expected. Managed and monitored workers, vendors, and materials to ensure quality and timely delivery of  what was expected. This helped to ensure that projects were completed on time and to a high standard. 
                    </li>

                    <li className=" font-light mb-4">
                      Tracked  and  helped  drive  completion  of  deliverables  (material  and  financial)  on  outstanding. Tracked  and  helped drive completion of deliverables (material and  financial) on outstanding. This helped  to ensure  that  projects were completed on time and within budget.  
                    </li>

                    <li className=" font-light mb-4">
                      Managed  and  kept  record  of  all  required  building  registration  and  statutory  registration  with  government  regulatory bodies (LASBCA, LASPPPA, etc.). Managed and kept a record of all required building registration and  statutory registration with government regulatory bodies (LASBCA, LASPPPA, etc.). This helped to ensure that  projects were compliant with government regulations and that all necessary paperwork was in order.  
                    </li>
                  </ul>
                </div>
              </li>



              <header className="flex">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>MOLAJ CONSULTANT, NIGERIA</h6>
                <time className="ml-auto text-primary text-xs font-light inline-block max-w-28 md:max-w-56">June 2019 – July 2020</time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start mb-5">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className=" font-light mb-4">
                      Guided and influenced the organization on the need to have well-detailed and graphics-enhanced reports for  presentation to aid agile understanding of project being reported. Guided and influenced the organization on  the need to have well-detailed and graphics-enhanced reports for presentation to aid agile understanding of  project  being  reported.  This  helped  to  ensure  that  project  reports  were  more  easily  understood  and  that  stakeholders had a clear understanding of project progress.  
                    </li>

                    <li className=" font-light mb-4">
                      Created and implemented innovative solutions in data management and filing of documents within and outside  (stakeholders meeting) the organization. Created and implemented innovative solutions in data management  and filing of documents within and outside the organization (stakeholders meeting). This helped to ensure that  documents were organized and easily accessible, which improved efficiency and productivity. 
                    </li>

                    <li className=" font-light mb-4">
                      Assisted in creating solution reports on diagnosed problems (Magodo Scheme 1 & 2, Bida Development Project,  Ijagemo Master Plan, BIPORAL, etc.). Assisted in creating solution reports on diagnosed problems for projects  like Magodo Scheme 1 & 2, Bida Development Project, Ijagemo Master Plan, BIPORAL, etc. This helped to ensure  that the organization was able to identify and solve problems in a timely and effective manner.   
                    </li>

                    <li className=" font-light mb-4">
                      Ensured computer systems and software (AutoCAD, Revit, SPSS, SketchUp, Geographic  Information System)  are operating at optimal performance levels. Ensured that computer systems and software like AutoCAD, Revit,  SPSS, SketchUp, Geographic Information System were operating at optimal performance levels. This helped to  ensure that the organization was able to work efficiently and effectively.  
                    </li>
                  </ul>
                </div>
              </li>






            </ul>
            <hr className="border-primary mt-5"/>

            <h3 className="font-550 text-primary my-4 px-3">Education</h3>

            <div className="px-3 mb-4">
              <header className="flex">
                <h6 className="text-primary">Software Testing and Quality Assurance </h6>
                <time className="ml-auto text-primary font-light">---</time>
              </header>
              <p className="text-primary font-light">Quales Consulting </p>
            </div>

            <div className="px-3 mb-4">
              <header className="flex">
                <h6 className="text-primary">Bachelor of Science (Urban and Regional Planning) </h6>
                <time className="ml-auto text-primary font-light">---</time>
              </header>
              <p className="text-primary font-light">Osun State University </p>
            </div>

            <div className="px-3 mb-4">
              <header className="flex">
                <h6 className="text-primary">Udemy, LinkedIn, Coursera, YouTube, Plural Sight etc.</h6>
                <time className="ml-auto text-primary font-light">---</time>
              </header>
              <p className="text-primary font-light"> </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-black text-white px-5 lg:px-28 py-20 lg:py-36 flex flex-col md:flex-row mb-10">
        <article>
          <h3 className="font-550 text-2xl lg:text-4xl">Want to connect with the Talent?</h3>
          <p className="font-light text-lg mt-5">Sometimes you need an engineer with a more specific set of skills to fit your project needs. Let&apos;s see if we can help</p>
        </article>
        <Link href="https://calendly.com/ayobami-/discuss-about-prospective-talent?month=2024-07" target="_blank" className="btn bg-btn-blue border-btn-blue text-white rounded-full px-8 my-auto mr-auto md:mr-0 md:ml-auto mt-10 md:mt-0">Schedule a Call</Link>
      </section>

      <Footer />

    </>
  )
}


