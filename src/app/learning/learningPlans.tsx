import Link from "next/link"


const LearningPlans = () => {


  return (
    <section id="learningPlans" className="bg-white flex flex-col items-center py-14 py-28">
      <h2 className="text-center text-xl md:text-2xl font-550 mb-3 text-primary">Our Learning Plans</h2>
      <p className="text-primary max-w-4xl text-center mx-auto md:max-w-550 lg:max-w-full px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, </p>

      <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-20 xl:px-28 gap-10 md:gap-3 lg:gap-10 py-10 md:mt-14 w-full">
        <article className="text-primary flex flex-col p-3 py-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
          <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Basic</h3>

          <ul className=" list-disc list-inside gap-4 text-sm font-light flex flex-col">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </article>

        <article className="text-primary flex flex-col p-3 py-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
          <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Standard</h3>

          <ul className=" list-disc list-inside gap-4 text-sm font-light flex flex-col">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </article>

        <article className="text-primary flex flex-col p-3 py-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
          <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Premium</h3>

          <ul className=" list-disc list-inside gap-4 text-sm font-light flex flex-col">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </article>
      </div>

      <div className="flex justify-center">
        <Link href="" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View More</Link>
      </div>
    </section>
  )
}

export default LearningPlans