import { ADD_TO_CART,REMOVE_FROM_CART, SET_USER_DATA } from "./constants";
const initial=[];

export const reducre=(state=initial,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
            case REMOVE_FROM_CART:
                let result=state.filter(item=>{
                    return item.name!=action.data
                })
            return [...result
            ]
            case SET_USER_DATA:
                return[
                    ...state,
                    action.data
                ]
            default:
                return state
    }

}