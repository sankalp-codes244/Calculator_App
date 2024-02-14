import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const crossFun = () =>{
    setInput(input => {
      return input.slice(0, -1);
    });
  };
  const onButtonPress = (value : any) =>{
    if (value === '=') {
      try{
        setResult(eval(input));
        setInput('');
      }
      catch(error){
        setResult('error')
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if(value === 'X') {
      crossFun()
    } else if(value === 'X' && result.length >0){
      setResult('');
    }
    
    else{
      setInput(input + value)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar  /> */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputText}
        value={input}
        onChangeText={setInput}
        keyboardType='numeric'
        >
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        {['C', '%', '/', 'X','7', '8', '9', '*', '4', '5', '6','-', '1', '2', '3', '+', '+/-', '0', '.', '='].map(
          (item, index)=>(
            <TouchableOpacity
            key={index}
            style={[styles.button,
            (item === 'C' || item === '()' || item === '%' || item === '/' || item === '*' || item === '-' || item === '+') ? styles.lightGreyButtons : null,
            item === '='? styles.equalButton : null,
            ]}
            onPress={()=> onButtonPress(item)}
            >
              <Text style={[styles.buttonText,
              (item === '()'|| item === '%' || item === '/' || item === '*' || item === '-' || item === '+') ? styles.greenButton : null,
              (item === 'C') ? styles.redButton : null,
              ]}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#010101',

  },
  resultContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  resultText:{
    fontSize:40,
  },
  inputContainer:{
    marginBottom:20,
    borderBottomWidth:2,
    borderColor:'#4d4d4d',
    marginLeft:20,
    marginRight:20,
    flex:1,
    justifyContent:"center",
    alignItems:'flex-end',
  },
  inputText:{
    fontSize:30,
  },
  buttonContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft:15,
    marginBottom:20,
  },
  button:{
    borderWidth:1,
    margin:10,
    backgroundColor:'#171719',
    height:75,
    width:75,
    borderRadius: 75/2,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    fontSize:35,

  },
  redButton:{
    fontSize:35,
    color:'#fc6969',
  },
  greenButton:{
    fontSize:45,
    color:'#6bba42',
  },
  lightGreyButtons:{
    backgroundColor:'#2d2d2f'
  },
  equalButton:{
    backgroundColor:'#338507'
  }
})