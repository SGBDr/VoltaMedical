import {Component, useStatem} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';



export default class Menu extends Component{

    constructor(props){
        super(props)
        this.state = {
            navigation : props.navigation
        }
    }

    render(){
        const navigation = this.state.navigation
        return (
            <View style={this.style.container}>
                <View style={{ paddingRight: 30, paddingLeft: 30}}>
                    <Button title={"Saisir Info"} color="#01337A" onPress={() => navigation.navigate('Saisir')} style={this.style.saisir}/>
                    <View style={{height: 10}}></View>
                    <Button title={"Consultater"} color="#01337A" onPress={() => navigation.navigate('Consulter')} style={this.style.consulter}/>
                    <View style={{height: 10}}></View>
                    <Button title={"Deconnexion"} color="red" onPress={() => navigation.navigate('Connexion')} style={this.style.deconnexion}/>         
                </View>
            </View>
        )
    }


    style = StyleSheet.create({
        saisir : {
            margin: 50,
        },
        consulter : {
            marginTop: 60
        },
        deconnexion : {
            marginTop: 60,
            color : 'red'
        },
        container : {
            paddingTop: 40,
        }, 
        text : {
            marginLeft: 10,
            textAlign: 'left',
            fontSize: 25, 
            flex : 4,
        }
    })

}