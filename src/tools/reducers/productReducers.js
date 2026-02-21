// reducer---action ve kohne state arasinda elaqe yaradir, funksiyani tetbiq edir, state yenileyir new state yaradir



// kohne bos stateim
const initialState={
    products:[]
}





export const productReducer=(state=initialState, action)=>{


    switch(action.type){
        case "ADD_PRODUCT":
            return{
                ...state,
                products: [...state.products, action.payload]
            }





            
// hemin id-ye uygun olan productlari men  filter etmeliyem-tapmaliyamki buttona basanda men hansi id-ye hansi producta click etdim
// mene ekranda clicklediyim id-ye uygun olmayan elementleri goster

        case "DELETE_PRODUCT":
            return{
                ...state,
                products:  state.products.filter((item)=>item.id !== action.payload)
            }
        default:
            return state

    }
}