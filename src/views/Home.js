import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function Home(props) {

  const { navigation } = props
  const [distance, setDistance] = useState()
  const [gasoline, setGasoline] = useState()

  const calculateResult = () => {
    if (distance && gasoline) {
      navigation.navigate('Result', { distance, gasoline })
    } else {
      alert('Digite os campos referentes a quilometragem e gasolina gasta do automovel.',
        { text: "OK" }
      )
    }
  }

  const clearFields = () => {
    setDistance(null)
    setGasoline(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Calculadora de Consumo</Text>
        <View style={styles.getDataArea}>
          <Text style={styles.text}>Quilometragem rodada:</Text>
          <TextInput style={styles.textInput}
            placeholder="Digite a quilometragem"
            placeholderTextColor='gray'
            keyboardType="decimal-pad"
            value={distance}
            onChangeText={setDistance} />
        </View>
        <View style={styles.getDataArea}>
          <Text style={styles.text}>Gasolina utilizada:</Text>
          <TextInput style={styles.textInput}
            placeholder="Digite os litros de gasolina gastos"
            placeholderTextColor='gray'
            keyboardType="decimal-pad"
            value={gasoline}
            onChangeText={setGasoline} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>

          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.button}
              onPress={clearFields}>
              <Text style={styles.buttonText}>LIMPAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.button}
              onPress={calculateResult}>
              <Text style={styles.buttonText}>CALCULAR</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  centerContainer: {
    borderWidth: 2,
    borderColor: 'white',
    margin: '20%',
    width: '80%',
    height: '80%',
    borderRadius: 25
  },
  title: {
    width: '100%',
    padding: '10%',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: 'white',
    width: '100%',
    height: 40,
    fontSize: 15,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10
  },
  getDataArea: {
    paddingTop: '4%',
    paddingBottom: '4%',
    paddingLeft: '8%',
    paddingRight: '8%'
  },
  buttonArea: {
    width: '50%',
    padding: '5%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 30,
    padding: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
})
