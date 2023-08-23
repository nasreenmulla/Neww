
import react from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
const Header=()=>{
    const catdata=useSelector((state)=>state.reducer)
    const [cart,setCart]=useState(0);
    useEffect(()=>{
        setCart(catdata.length)
    },[catdata])
    return(
        <View>
            <Text>{cart}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      flex:1
    }
})
 export default Header();