import Link from "next/link"

const Testimonials = () => {

  return (
    <section id="testimonials" className="bg-white px-5 xl:px-28 py-10 md:py-16">
      <header className="flex">
        <h2 className="text-xl md:text-2xl mx-auto font-550 bg-gradient-to-r max-w-550 text-primary mb-5">Testimonials</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" flex flex-col items-center xl:items-end">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. 
            </p>
            <h5 className="text-primary mt-7 text-center font-550">Talent Name</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort #</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
            </figure>
            
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. 
            </p>
            <h5 className="text-primary mt-auto text-center font-550">Talent Name</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort #</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
            </figure>
          </div>
        </div>

        <div className=" flex flex-col items-center xl:items-start">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. 
            </p>
            <h5 className="text-primary mt-auto text-center font-550">Talent Name</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort #</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
            </figure>
          </div>
        </div>

      </div>

      <div className="flex justify-center">
        <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View More</Link>
      </div>
    </section>
  )
}

export default Testimonials