import { FaRegPaperPlane } from "react-icons/fa";

const CTA = () =>{
    return(
      <section className="bg-[url('../public/assets/bg/cta.png')]  bg-cover bg-no-repeat sm:bg-right bg-center md:py-16 py-8  md:px-24 px-4 rounded-2xl mx-4" >
        <div className="container mx-auto top h-fit ">
          <div className='row flex'>
            <div className='column sm:w-8/12 w-12/12'>
              <h3 className='lg:text-4xl sm:text-3xl text-2xl   font-primary-font font-black text-[#253d4e]'>Stay home & get your daily needs from our shop</h3>
              <p className='lg:text-2xl text-1xl text-gray-600 py-8'> Start Your Daily Shopping with <span className="text-primary-color"> Nest Mart</span></p>
              <form className='flex justify-between items-center pl-6 bg-white rounded-full sm:w-[70%] md:mt-8'>
                <FaRegPaperPlane className='text-gray-400 w-[10%]' />
                <input className='md:py-5  pl-4 py-4 w-[80%] rounded-full' type='text' placeholder='Email address ' />
                <button className='md:py-5 md:px-12 px-4 py-4 rounded-full bg-primary-color text-white hover:bg-primary-color-dark transition linear delay-150'>Subscribe</button>
              </form>
            </div>
            <div className='column'>
            </div>

          </div>
        </div>
        <div className='row bottom '></div>
      </section>
    )
}
export default CTA;