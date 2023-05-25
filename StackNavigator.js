import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import OrderScreen from "./screens/OrderScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PickUpScreen from "./screens/PickUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";

const StackNavigator = () => {
    const stack = createStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Register">
                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="Order" component={OrderScreen} />
                <stack.Screen name="Cart" component={CartScreen} />
                <stack.Screen name="Login" component={LoginScreen} />
                <stack.Screen name="PickUp" component={PickUpScreen} />
                <stack.Screen name="Profile" component={ProfileScreen} />
                <stack.Screen name="Register" component={RegisterScreen} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;