import { PiShoppingCartLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const AddToCartBtn = () => {
  return (
        <Link>
          <button className="flex flex-cols items-center gap-2 bg-primary-color text-sm text-white  py-1 px-2 rounded "><PiShoppingCartLight/> Add To Cart </button>
        </Link>

  )
}

export default AddToCartBtn;