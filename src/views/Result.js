import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const niveisConsumo = [
    {
        nivel: 'A',
        descricao: 'mais de 12km/l',
        color: '#006400'
    },
    {
        nivel: 'B',
        descricao: 'até 12km/l',
        color: '#9ACD32'
    },
    {
        nivel: 'C',
        descricao: 'até 10km/l',
        color: 'yellow'
    },
    {
        nivel: 'D',
        descricao: 'até 8km/l',
        color: 'orange'
    },
    {
        nivel: 'E',
        descricao: 'até 4km/l',
        color: 'red'
    },
]

export default function Result(props) {
    const { route, navigation } = props
    const { gasoline, distance } = route.params

    const [data, setData] = useState({})
    const [average, setAverage] = useState(0)

    const defineResult = () => {
        setAverage(distance / gasoline)

        if (average <= 4) setData(niveisConsumo[4])
        else if (average <= 8) setData(niveisConsumo[3])
        else if (average <= 10) setData(niveisConsumo[2])
        else if (average <= 12) setData(niveisConsumo[1])
        else if (average > 12) setData(niveisConsumo[0])
    }

    useEffect(() => {
        defineResult()
    }, [average])

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={styles.title}>Resultado</Text>
                <View style={styles.textArea}>
                    <Text style={styles.text}>Seu carro está fazendo {average.toFixed(2)}km/l.</Text>
                    <Text style={styles.text}>Atualmente se encontra na classificação de consumo {data.nivel}, {data.descricao}</Text>
                </View>
                <View style={styles.colorAreaContainer}>
                    <View style={styles.colorArea} backgroundColor={data.color}>
                        <Text style={styles.textColorArea}>{data.nivel}</Text>
                    </View>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.buttom}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttomText}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    textArea: {
        width: '100%',
        padding: '10%'
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    colorAreaContainer: {
        width: '100%',
        height: 35
    },
    colorArea: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        padding: 5
    },
    textColorArea: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignContent: 'flex-end',
        width: '100%',
        padding: '8%',
    },
    buttom: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 30,
        padding: 5,
        width: '100%'
    },
    buttomText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
})
