import { View } from 'react-native'
import {styles} from './style'
import { ContextPos} from '../../context/GravityContext';
import { useContext } from 'react'


export const Ball = () => {
    const pos = useContext(ContextPos)
    return (
        <View style={[styles.container, {bottom:pos?.pos}]}>

        </View>
    )
}