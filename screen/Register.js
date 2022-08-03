import react from "react";
import { View, StyleSheet, Text , Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UserInput from "../Components/UserInput";
import {useNavigation} from "@react-navigation/native";
import { useState } from "react";

const Register = ({navigation}) =>{
    //khai bao nhung thuoc tinh de nhan gia tri tu input
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");

    const handleSubmit = async () =>
    {
        setLoading(true);
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        if(!fullName || !phone || !email || !password || !confirmPass) {
            alert("All field should not be empty!");
            setLoading(false);
            return;
        }
        else if(reg.test(email) === false){
            alert("Email invalid");
            setLoading(false);
            return;
        }
        else if(reg.test(phone) === false){
            alert(" Invalid Phone number");
            setLoading(false);
            return;
        }
        else if(password != confirmPass){
            alert(" Password not match!");
            setLoading(false);
            return;
        }
        else if(password.length < 8){
            alert(" Password must be more than 8 characteristics!");
            setLoading(false);
            return;
        }

        try {
            alert("Sign up successfully!");
        }
        catch (err) {
            alert("Sign up fail!");
        }
    };

    return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.LogIn}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <Text style={styles.title}>REGISTER</Text>

        {/* dat gia tri vai the input */}
        <UserInput name = 'Fullname' value={fullName} setValue={setFullName} autoCapitalize='word'></UserInput>
        <UserInput name = 'Email' value={email} setValue={setEmail} autoCompleteType='email'></UserInput>
        <UserInput name = 'Password' secureTextEntry={true} value={password} setValue={setPassword}></UserInput>
        <UserInput name = 'ConfimPassword' secureTextEntry={true} value={confirmPass} setValue={setconfirmPass}/>
        <UserInput name = 'Phone' value={phone} setValue={setPhone} keyboardType='numeric'></UserInput>

        <TouchableOpacity style={styles.btnLogin} onPress={() => handleSubmit()}>
            <Text> {loading ? "Waiting..." : "Register"} </Text>
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