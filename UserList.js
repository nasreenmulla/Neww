import react from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
const UserList=()=>{
 const dispatch=useDispatch();
 const userList=useSelector((state)=>state.reducer)

 useEffect(()=>{
    dispatch(getUsetList())
 },[])

 console.warn("in component data",userList)
    return(
        <View>
            {
                userList.length?
                userList.map(()=>{
                 <Text>{item.name}</Text>
                }):null
            }
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      flex:1
    }
})
 export default UserList();