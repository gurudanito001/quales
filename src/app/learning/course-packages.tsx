import Link from "next/link";
import Image from "next/image";



const CoursePackages = ()=>{

  return (
    <section id="coursePackages" className="bg-neutral lg:px-28 flex flex-col items-center py-28 px-5 sm:px-12 md:px-0">
      <h2 className="text-center text-xl md:text-2xl font-550 mb-3 text-primary">Course Packages</h2>
      <h3 className="text-2xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0 mb-5 text-center">Certified Tech Training Courses</h3>

      <p className="text-primary md:max-w-550 lg:max-w-4xl text-center mx-auto ">Explore our certified tech training courses in QA Engineering and Scrum Mastery, designed to elevate your skills and propel your career forward in the ever-evolving tech landscape. Join us and unlock your full potential today!</p>

      <div className="bg-white grid grid-cols-1 md:grid-cols-2 py-10 mt-7 md:mt-14 w-full rounded-3xl md:rounded-none">
        <article className="text-primary flex flex-col md:border-r md:border-gray-400 p-10">
          <Image src="/images/qaEngineer.svg" className="mx-auto w-24 h-24 mb-3" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />  
          <h3 className="text-center text-xl font-550 text-primary mb-5 md:mb-7 px-5">QUALITY ASSURANCE ENGINEERING</h3>
          <p className="max-w-md text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>

          <div className="flex justify-center">
            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View Course</Link>
          </div>
        </article>

        <article className="text-primary flex flex-col p-10">
          <Image src="/images/scrumMaster.svg" className="mx-auto w-24 h-24 mb-3" width={150} height={150} objectFit="contain" alt="Scrum Master Icon" />
          <h3 className="text-center text-xl font-550 text-primary mb-5 md:mb-7 px-5">SCRUM MASTERY</h3>
          <p className="max-w-md text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. </p>

          <div className="flex justify-center">
            <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View Course</Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CoursePackages;