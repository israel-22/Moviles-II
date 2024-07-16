import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen({navigation}: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pair Puzzle</Text>
            <View>
                <TouchableOpacity style={styles.btnStart} onPress={()=>navigation.navigate('StartScreen')}>
                    <Text style={styles.txt}>Comezar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.btnRegister}onPress={()=>navigation.navigate('RegistroScreen')}>
                    <Text style={styles.txt}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4b8ae1',


    },

    btnStart: {
        backgroundColor: '#3c59ea',
        borderWidth: 1,
        borderColor: 'white',
        width: '170%',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        right:20
    },
    btnRegister: {
        backgroundColor: '#17B169',
        borderWidth: 1,
        borderColor: 'white',
        width: '132%',
        alignItems: 'center',
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 10,
        right:11,

    },
    txt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 20,
        textDecorationColor:'black',
        textShadowColor:'#000',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius:2,


    },

})