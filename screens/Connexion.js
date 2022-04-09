import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react/cjs/react.development';




function onConnexion(navigation, nom, nss, setError){
    if(nom === "rudy" && nss === "rudy") navigation.navigate('Menu');
    else setError("Le couple d'identifiant " + nom + " - " + nss + " n'est pas enregistré")
}

function Connexion({navigation}){
    const [nom, setNom] = useState("rudy")
    const [nss, setNss] = useState("rudy")
    const [error, setError] = useState("")
    console.log(navigation)
    return (
        <View style={style.container}>
            <View style={{marginTop: 10, paddingRight: 30, paddingLeft: 30}}>
                <Text>Votre NSS :</Text>
                <TextInput style={style.input} onChangeText={(text) => setNss(text)} placeholder={"2 15 ** ** **"}/>
                <Text>Votre Mot de passe :</Text>
                <TextInput style={style.input} onChangeText={(text) => setNom(text)} placeholder={"* * * * *"}/>
                <Button title={"Connexion"} onPress={() => onConnexion(navigation, nom, nss, setError)} style={style.button}/>       
                <Text style={style.oublie}>{error}</Text>
            </View>

        </View>
    )
}


style = StyleSheet.create({
    input : {
        height: 60,
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
    oublie : {
        fontSize : 12,
        color : "pink",
        textDecorationLine: "underline",
        marginTop: 10
    }
})
export default Connexion;