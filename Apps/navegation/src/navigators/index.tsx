import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../pages/home";
import { StackNavigationOptions } from "@react-navigation/stack/lib/typescript/src/types";
import { Ingredient } from "../pages/exercicio";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="exercicio" component={Ingredient} />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
    title:"Home",
    headerTitleAlign:"center",
    headerStyle:{
        height:100,
        backgroundColor:"#bbb"
    }
};
