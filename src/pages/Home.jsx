import Navbar from '../components/Navbar'
import { FaRegPaperPlane } from "react-icons/fa";
import FeaturedCategory from '../components/FeaturedCategory';
// import image1 from "../assets/slider-1-1.webp";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <section className="bg-[url('../public/assets/slider-1-1.webp')] bg-no-repeat bg-center md:py-16 py-8  md:px-24 px-4 rounded-2xl mx-4" >
        <div className="row top xl:w-[50%] h-fit ">
          <h1 className='lg:text-7xl sm:text-6xl text-5xl   font-primary-font font-bold text-[#253d4e]'>Welcome to Nest, Your Natural Store</h1>
          <p className='lg:text-4xl text-1xl text-gray-600 py-8 '>Sign Up to get best deals in town</p>
          <form className='flex justify-between items-center pl-6 bg-white rounded-full sm:w-[70%] md:mt-16'>
            <FaRegPaperPlane className='text-gray-400 w-[10%]' />
            <input className='md:py-5  pl-4 py-4 w-[80%] rounded-full' type='text' placeholder='Email address '/>
            <button className='md:py-5 md:px-12 px-4 py-4 rounded-full bg-primary-color text-white hover:bg-primary-color-dark transition linear delay-150'>Subscribe</button>
          </form>
          
        </div>
        <div className='row bottom '></div>
      </section>
      <FeaturedCategory/>
    </div>
  )
}

export default Home