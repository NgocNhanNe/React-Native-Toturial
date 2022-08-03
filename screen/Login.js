import react from "react";
import { View, StyleSheet, Text , Image, TextInput, TouchableOpacity} from "react-native";
import UserInput from "../Components/UserInput"
import {useNavigation} from '@react-navigation/native'


const LogIn = () =>{
    const navigation = useNavigation();
    return (
    <View style={styles.LogIn}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <Text style={styles.title}>LOG IN</Text>

        <UserInput name = 'Username'></UserInput>
        <UserInput name = 'Password' secureTextEntry={true}></UserInput>

        <TouchableOpacity style={styles.btnLogin}>
            <Text>Login</Text>
        </TouchableOpacity>

        <Text style={{marginTop: 20}}>
            Do not have account? <Text onPress={() => navigation.navigate('Register')} style={{color: 'blue'}}>Register</Text>
        </Text>

        <Text style={{marginTop: 20, color: 'blue'}}>Forgot Password</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    LogIn: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
    },
    img: {
        width:250,
        height:150,
        marginVertical: 30,// margin: top and bottom, herizaontal - left and right
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "blue"
    },
    btnLogin: {
        alignItems: "center",
        justifyContent: 'center',
        width: '70%',
        height: 30,
        backgroundColor: 'orange',
        marginTop: 50,
        borderRadius: 20
    }
});
export default LogIn;   