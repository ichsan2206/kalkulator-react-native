import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Box, VStack,} from 'native-base';
import { useState } from 'react';

export default function App() {
  const [hitung, setHitung] = useState(0);
  const [hasil, setHasil] = useState('');

  const inputAngka = (value) =>{
    if(hitung == 0){
      setHitung(value)
    }else{
      setHitung(hitung+''+value)
    }
  }

  console.log(hitung);

  const hitungHasil = ()=>{       
    setHasil(eval(hitung))
  }
  const clear = () =>{
    setHitung(0)
    setHasil('')
  }
  console.log(inputAngka);
  return (
    <NativeBaseProvider >
      <Box style={styles.container}>
      <StatusBar style="auto" />
      <Box w={'100%'} style={{flex: 1, justifyContent: 'center', alignItems:''}}>
        <Text style={{color:'white', fontSize: 43, textAlign: 'right', justifyContent: 'flex-end', marginRight: 15}}>{hitung}</Text>
        <Text style={{color:'white', fontSize: 43, textAlign: 'right', justifyContent: 'flex-end', marginRight: 15}}>{hasil}</Text>
      </Box>
      <VStack space={0} alignItems="center">
      <HStack space={3} justifyContent="center">
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'orange',  
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka('-')}>-</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'orange', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka('+')}>+</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'orange', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka('/')}>/</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'orange', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka('*')}>x</TouchableOpacity>
      </HStack>;

      <HStack space={3} justifyContent="center">
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(1)}
      >1</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(2)}>2</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(3)}>3</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'orange', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>clear()}>C</TouchableOpacity>
      </HStack>;

      <HStack space={3} justifyContent="center">
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(4)}>4</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(5)}>5</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(6)}>6</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'orange', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>hitungHasil()}>=</TouchableOpacity>
      </HStack>;

      <HStack space={3} justifyContent="center">
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(7)}>7</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(8)}>8</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(9)}>9</TouchableOpacity>
      <TouchableOpacity 
      style={{color: 'white', 
      backgroundColor: 'grey', 
      width:80, height:80, 
      justifyContent:'center', 
      alignItems:'center',
      fontWeight:'bold',
      borderRadius:7,
      fontSize:40}}
      onPress={()=>inputAngka(0)}>0</TouchableOpacity>
      </HStack>;
      </VStack>;
    </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242024',
    alignItems: 'center'
  }
});
