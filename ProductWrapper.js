import react from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from './Header';
import Product from './Product';

const ProductWrapper=(navigation)=>{
    const products=[
        {
            name:'samsung',
            price:2999,
            color:'white',
            img:''
        },
        {
            name:'nokia',
            price:2999,
            color:'black',
            img:''
        },
        {
            name:'redmi',
            price:2999,
            color:'golden',
            img:''
        }
    ]
    return(
        <View>
            <Button title='go to user list' onPress={()=>navigation.navigator("User")} ></Button>
            <Header/>
            <Product/>
             <ScrollView>
                
                      {
                        products.map((item)=>{
                            <Product item={item}/>
                         
                        })
                     }
                
             </ScrollView>
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      flex:1
    }
})
export default ProductWrapper();