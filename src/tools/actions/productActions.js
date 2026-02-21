// post--- product elave edirsen api-ya
// delete- producti silirsen api-dan
// COUNTER-PAYLOAD YOX IDI. 0 +1 -1
// PRODUCT--- PAYLOAD VAR, CUNKI ONUN XUSIYYETLERIDE 


export const addProduct=(product)=>{
    return{
        type:"ADD_PRODUCT",
        payload:product
        // id, price, category, title, image
    }
}

export const deleteProduct=(id)=>{
   return{
    type:"DELETE_PRODUCT",
    payload:id
   }
}

