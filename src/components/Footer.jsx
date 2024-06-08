import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa"
import { FaLocationPin } from "react-icons/fa6"

const Footer=()=>{
    return(
        <div>
            <section>
                <div className="row">

                    <div className="column w-2/6">
                        <img src="assets/logo.svg"/>
                        <p>Pellentesque posuere orci lobortis</p>
                        <div className="" >
                            <FaLocationPin className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold"> Address: </span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        </div>
                        <div className="" >
                            <FaPhone className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold"> Call Us:  </span> (+1) - 540-025-124553</p>
                        </div>
                        <div className="" >
                            <FaEnvelope className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold">  Email:  </span> sale@Nest.com</p>
                        </div>
                        <div className="" >
                            <FaClock className="inline text-primary-color"/>
                            <p className="inline"> <span className="font-semibold">  Hours: </span> 10:00 - 18:00, Mon - Sat</p>
                        </div>
                    </div>
                    <div className="column w-2/6"></div>
                    <div className="column w-2/6"></div>
                    <div className="column w-2/6"></div>
                    <div className="column w-2/6"></div>
                </div>
            </section>
        </div>
    )
}
export default Footer