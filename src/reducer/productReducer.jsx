import SingleProduct from "../pages/SingleProduct";

const productReducer = (state, action) =>{
       
    switch (action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "SET_API_DATA":
            return{
                ...state,
                isLoading: false,
                products:action.payload,

            };
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                iError:true,
            };
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isLoading:false,
                singleProduct:action.payload
            }
        default:
            return state;
    }
    
    
};

export default productReducer