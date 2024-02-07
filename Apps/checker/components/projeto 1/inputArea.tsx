import { useState } from 'react'
import {View, TextInput,Text} from 'react-native'
import {styles} from '../../style/styles'
type Props = {
    label:string,
    placeholder:string,

}

export const EmailInput = ({label,placeholder}:Props) => {
    const [email,setEmail] = useState("")
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={email}
            onChangeText={ t => setEmail(t)}
            autoCapitalize='none'
            keyboardType='email-address'
            />
        </>
    )

}

export const PasswordInput = ({label,placeholder}:Props) => {
    const [pwd,setPwd] = useState("")
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={pwd}
            onChangeText={ t => setPwd(t)}
            autoCapitalize='none'
            secureTextEntry
            />
        </>
    )

}