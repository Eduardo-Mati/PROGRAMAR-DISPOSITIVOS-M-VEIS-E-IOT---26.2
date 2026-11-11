import {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';
type CustomButtonProps = TouchableOpacityProps & {
    label: string;
    icon?: ReactNode;
};


export function Button( {label, icon, ...rest}: CustomButtonProps) {
    return (
        <TouchableOpacity style={style.button} {...rest} activeOpacity={0.7}>
            {icon}
            <text style={style.label}>{label}</text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    label: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});