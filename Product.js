
import react from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { addToCart,removeFromCart } from './redux/constants';
import {View,Text,StyleSheet,Image,Button} from 'react-native';

const Product=(props)=>{
    const item=props.item
    const [added,setAdded]=useState(false);
    const dispatch=useDispatch();
    const Handleremovetocart=(item)=>{
        dispatch(removeFromCart(item.name));
    }
    const cartItem=useSelector((state)=>state.reducer)
    const handle=(item)=>{
        dispatch(addToCart(item));
    }
    useEffect(()=>{
     let result=cartItem.filter((element)=>{
        return  element.name===item.name;
     });
     if(result.length){
        setAdded(true)
     }else{
        setAdded(false);
     }
    },[cartItem])
    
    return(
        <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.color}</Text>
        <Image styles={{width:200,hieght:200}}>source={{uri:item.img}}</Image>
        {
            setAdded?        <Button title='ADD To CART' onPress={(item)=>handle(item)}></Button>:
                    <Button title='REMOVE To CART' onPress={(item)=>Handleremovetocart(item)}></Button>
        }
        
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      flex:1
    }
})
export default Product();