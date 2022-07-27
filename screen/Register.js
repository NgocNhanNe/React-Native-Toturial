import react from "react";
import { View, StyleSheet, Text , Image, TextInput, TouchableOpacity} from "react-native";
import UserInput from "../Components/UserInput"

const Register = () =>{
    return (
    <View style={styles.LogIn}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
        <Text style={styles.title}>REGISTER</Text>
        <UserInput name = 'Username'></UserInput>
        <UserInput name = 'Password'></UserInput>
        <UserInput name = 'ConfimPassword'></UserInput>
        <UserInput name = 'Full Name'></UserInput>
        <UserInput name = 'Address'></UserInput>
        <TouchableOpacity style={styles.btnLogin}>
            <Text>Register</Text>
        </TouchableOpacity>
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
    }
});
export default Register;   