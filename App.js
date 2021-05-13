/* eslint-disable */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import HomeScreen from './src/screens/Home.js';
import ProductsScreen from './src/screens/Products.js'
import CategoriesScreen from './src/screens/Categories.js'
import OrdersScreen from './src/screens/Orders.js'
import ProductDetailsScreen from './src/screens/ProductDetails.js'


const Stack = createStackNavigator();

  function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name= "Home" component={HomeScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "Products" component={ProductsScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "Categories" component={CategoriesScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "Orders" component={OrdersScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "ProductDetails" component={ProductDetailsScreen}
            options={{
                headerShown:false
            }}
            />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;