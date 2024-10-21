import Image from "next/image";
import Link from "next/link";


const LatestArticles = () => {

  return (
    <section className="bg-white px-5 xl:px-28 pt-10 mb-20">
      <header>
        <h2 className="text-primary font-550 mb-8 text-xl md:text-2xl">Read our Latest Articles</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <Link href="/articles/the-role-of-automation-in-quality-assurance-tools-and-techniques">
            <figure className="w-full h-40 shadow-md bg-[url('/images/role-of-automation.webp')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg  font-550 mb-2 leading-5 text-primary">The Role of Automation in Quality Assurance: Tools and Techniques</h4>
          </Link>

          <Link href="/articles/the-shift-from-manual-to-automated-testing-challenges-and-solutions">
            <figure className="w-full h-40 shadow-md bg-[url('/images/shift-from-manual.webp')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg  font-550 mb-2 leading-5 text-primary">The Shift from Manual to Automated Testing: Challenges and Solutions</h4>
          </Link>

          <Link href="/articles/testing-in-devops-how-qa-engineers-can-keep-up-with-the-speed-of-continuous-integration">
            <figure className="w-full h-40 shadow-md bg-[url('/images/testing-in-devops.webp')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg  font-550 mb-2 leading-5 text-primary">Testing in DevOps: How QA Engineers Can Keep Up with the Speed of Continuous Integration</h4>
          </Link>

          <Link href="/articles/who-is-a-scrum-master">
            <figure className="w-full h-40 shadow-md bg-[url('/images/who-is-a-scrum-master.webp')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg  font-550 mb-2 leading-5 text-primary">Who is a Scrum Master?</h4>
          </Link>
      </div>
    </section>
  )
}

export default LatestArticles