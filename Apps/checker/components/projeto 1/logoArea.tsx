import {View,Text, Image} from 'react-native'
import {styles} from '../../style/styles'

export const LogoArea = () => {
    return (
        <>
            <Image style={styles.logo} source={require('../../assets/rn_login_logo.png')}/>
            <Text style={styles.title}>Sistema de Login</Text>
            <Text style={styles.subtitle}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        </>
    )
}