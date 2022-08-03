import react from "react";
import { View, StyleSheet, Text , Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UserInput from "../Components/UserInput";
import {useNavigation} from "@react-navigation/native";

const Register = ({navigation}) =>{
    return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.LogIn}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <Text style={styles.title}>REGISTER</Text>

        <UserInput name = 'Username'></UserInput>
        <UserInput name = 'Password' secureTextEntry={true}></UserInput>
        <UserInput name = 'ConfimPassword' secureTextEntry={true}/>
        <UserInput name = 'Full Name'></UserInput>
        <UserInput name = 'Address'></UserInput>

        <TouchableOpacity style={styles.btnLogin}>
            <Text onPress={() => navigation.navigate('LogIn')}>Register</Text>
        </TouchableOpacity>
    </KeyboardAwareScrollView>
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
        fontSize: 40,
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
    },
    // boderReg: {
    //     width: "100%",
    //     height: 500,
    //     borderStyle: 'solid',
    //     borderWidth: 0.5,
    //     borderColor: 'black'
    // }
});
export default Register;   