import {Component, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid } from 'react-native';



export default class ConsulterScreen extends Component{

    constructor(){
        super()
        this.setState = {
            nom : "___",
            raison : "Probleme",
            date : "**, ******* *** à **H**",
            commentaire : ""
        }
    }

    toastY = () => {
        ToastAndroid.showWithGravityAndOffset(
          "Votre demande de consultation a été envoyé a votre aide soignant.",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
    };

    toastF = () => {
        ToastAndroid.showWithGravityAndOffset(
          "Renseignez tous les champs, pour prendre rendez-vous.",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
    };

    render(){
        const [nom, setNom] = useState("")
        const [raison, setRaison] = useState("")
        const [date, setDate] = useState("")
        const [commentaire, setCommentaire] = useState("")
        return (
            <View style={this.style.container}>
                <View style={{marginTop: 10, paddingRight: 30, paddingLeft: 30}}>
                    <Text>Votre Nom :</Text>
                    <TextInput style={this.style.input} onChangeText={text => setNom(text)} placeholder={"Msr Mme Volta"}/>
                    <Text>Pourqoi prenez-vous rendez vous ?</Text>
                    <TextInput style={this.style.input} placeholder="J'ai des maux de tete" onChangeText={text => setRaison(text)}/>
                    <Text>Date souhaitez du rendez-vous :</Text>
                    <TextInput style={this.style.input2} onChangeText={text => setDate(text)} placeholder={"12 Janvier 2022, 18H30"}/>
                    <Text>Info supplémentaire ?</Text>
                    <TextInput style={this.style.input} style={this.style.input2} onChangeText={text => setCommentaire(text)} placeholder={"Commentaire ..."}/>
                    <Button title={"Prendre Rendez-Vous"} onPress={() => {
                        if(nom.trim() != "" && raison.trim() != "" && date.trim() != "" && commentaire.trim() != "")this.toastY()
                        else this.toastF()
                    }}  
                    style={this.style.button}/>        
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
        input2 : {
            height: 100,
            borderRadius: 5,
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