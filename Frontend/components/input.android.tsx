import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function Input({... rest} : TextInputProps) {
    return <TextInput style={style.textInput} {...rest} />;
}

const style = StyleSheet.create({
    textInput: {
        height: 48,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10,
        width: "100%",
    },
});