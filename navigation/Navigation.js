import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from '../screens/Connexion';
import { Text, StyleSheet } from 'react-native';
import ConsulterScreen from '../screens/ConsulterScreen'
import Menu from '../screens/Menu';
import SaisirScreen from '../screens/SaisirScreen';


const stack = createNativeStackNavigator()

function Navigation(){
    return(
        <NavigationContainer> 
            <stack.Navigator>
                <stack.Screen name="Connexion" component={Connexion} options={{title : "Connexion", headerRight: () => (<Text style={style.text}>VoltaMedical</Text>), headerStyle : {backgroundColor: '#01337A'}, headerTitleStyle : {fontWeight: 'bold'}}}/>
                <stack.Screen name="Menu" component={Menu}/>
                <stack.Screen name="Consulter" component={ConsulterScreen}/>
                <stack.Screen name="Saisir" component={SaisirScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

style = StyleSheet.create({ 
    text : {
        textAlign: 'center',
        fontSize: 25,
        flex : 4,
    }
})

export default Navigation