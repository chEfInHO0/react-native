import {View,
    Text, StyleSheet, Pressable} from "react-native"

type Checker = {
    name:string;
    price:number;
    originalPrice?:number;
    ingredients:string[];
    onPress: () => void;
}

export const CheckList = ({
    name,
    price,
    originalPrice,
    ingredients,
    onPress
}:Checker) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.item}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text>
                    $ {price.toFixed(2)}
                </Text>
                {(originalPrice && originalPrice > price) ? <Text style={styles.promo}>PROMOTION</Text> : undefined}
                <Text>
                    {ingredients.join(', ')}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item:{
        margin:10,
        padding:10,
        textAlign:"center",
        backgroundColor:"#aaa"
    },
    promo:{
        color:"orange",
        textTransform:"capitalize"
    },name:{
        fontWeight:"bold"
    }
})
