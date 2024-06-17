import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { FaLocationPin } from "react-icons/fa6"

const Footer=()=>{
    return(
        <div>
            <section className="p-4">
                <div className="row grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">

                    <div className="column ">
                        <img src="assets/logo.svg"/>
                        <p>Pellentesque posuere orci lobortis</p>
                        <div>
                            <FaLocationPin className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold"> Address: </span> 5171 W Campbell Ave undefined Kent, <br/> Utah 53127 United States</p>
                        </div>
                        
                    </div>
                    <div className="column ">
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>

                        <div>
                            <FaPhone className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold"> Call Us:  </span> (+1) - 540-025-124553</p>
                        </div>
                        <div>
                            <FaEnvelope className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold">  Email:  </span> sale@Nest.com</p>
                        </div>
                        <div>
                            <FaClock className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold">  Hours: </span> 10:00 - 18:00, Mon - Sat</p>
                        </div>
                    </div>
                    <div className="column ">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-2 text-4xl ">
                            <FaFacebook className="text-white bg-primary-color p-2 rounded-full "/>
                            <FaTwitter className="text-white bg-primary-color p-2 rounded-full "/>
                            <FaInstagram className="text-white bg-primary-color p-2 rounded-full "/>
                            <FaPinterest className="text-white bg-primary-color p-2 rounded-full "/>
                            <FaYoutube className="text-white bg-primary-color p-2 rounded-full "/>
                        </div>
                        <p>Up to 15% discount on your first subscribe</p>
                    </div>
                    <div className="column ">
                        <h3 className="text-xl font-semibold mb-4">App & Payment</h3>
                        <p>From App Store or Google Play</p>
                        <div className="flex gap-4 my-4">
                            <img className="w-[30%]" src="../assets/app-store.avif"/>
                            <img className="w-[30%]" src="../assets/google-play.avif"/>
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img className="my-4" src="../assets/payment.avif"/>

                        

                    </div>


                </div>
                <div className="flex justify-center">
                    <p className="text-center">© 2024 Boostify Nest. <span className="text-primary-color"> Powered by ShalomTech.</span></p>

                </div>
            </section>
        </div>
    )
}
export default Footer