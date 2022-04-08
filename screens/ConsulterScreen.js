import {Component, useStatem} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default class ConsulterScreen extends Component{

    raison = "Pourqoi prenez-vous rendez vous ?"

    constructor(){
        super()
        this.setState = {
            nom : "",
            raison : "",
            date : "",
            commentaire : ""
        }
    }

    _nom(event){
        this.setState({nom : event.target.value})
    }

    _raison(event){
        this.setState({raison : event.target.value})
    }

    _date(event){
        this.setState({date : event.target.value})
    }

    _commentaire(event){
        this.setState({commentaire : event.target.value})
    }

    //click sur back
    onBack = (event) => {
        this.setState({mVisible : true})
    }

    render(){
        const nom = this.state
        console.log(nom)
        return (
            <View style={this.style.container}>
                <View style={this.style.flex}>
                    <Text style={this.style.text}>Consulter</Text>
                    <Button style={this.style.nav} title={"back"} onPress={this.onBack}/>
                </View>
                <View style={this.style.separator}></View>
                <View style={{marginTop: 10, paddingRight: 30, paddingLeft: 30}}>
                    <Text>Votre Nom :</Text>
                    <TextInput style={this.style.input} onChange={this._event} placeholder={"Msr Mme Volta"}/>
                    <Text>{this.raison}</Text>
                    <TextInput style={this.style.input} onChange={this._raison}/>
                    <Text>Date souhaitez du rendez-vous :</Text>
                    <TextInput placeholder={"12 Janvier 2022, 18H30"} onChange={this._date}/>
                    <Text>Info supplémentaire ?</Text>
                    <TextInput style={this.style.input}/>
                    <Button title={"Prendre Rendez-Vous"} onChange={this._commentaire} style={this.style.button}/>        
                </View>
            </View>
        )
    }


    style = StyleSheet.create({
        input : {
            height: 40,
            backgroundColor: 'whitesmoke',
            padding: 10,
            marginBottom: 5
        },
        button : {
            marginTop: 100,
        },
        container : {
            paddingTop: 40,
        }, 
        text : {
            marginLeft: 10,
            textAlign: 'left',
            fontSize: 25, 
            flex : 4,
        },
        separator : {
            backgroundColor : '#01337A',
            width: '100%',
            height: 5,
            marginTop: 10
        },
        flex : {
            flexDirection: 'row',
            color: 'black',
            paddingRight: 5
        },
        nav : {
            textAlign: 'left',
            fontSize : 25,
            flex : 3,
        }
    })

}