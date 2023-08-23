import {ADD_TO_CART} from './constants'

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }

}
export function removefromCart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}