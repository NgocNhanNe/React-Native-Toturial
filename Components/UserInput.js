import react from "react";
import { View, StyleSheet, Text , Image, TextInput, TouchableOpacity} from "react-native";
const UserInput = ({name, secureTextEntry}) => {
    return (
        <View>
        <Text style={{width: "100%", marginTop: 20, fontWeight: '500' }}>{name}</Text>
        <TextInput secureTextEntry={secureTextEntry} style={styles.input} />
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 320,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        borderRadius: '10',
        height: 30
    }
});

export default UserInput;