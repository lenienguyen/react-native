import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Button, Platform} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
//import Icon from "react-native-vector-icons/Ionicons";

// pages
import start from './src/screens/start/index';
import home from './src/screens/home/index';
import books from './src/screens/books/index';
import book from './src/screens/book/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

	/*
	function test(){
		return(
			<Stack.Navigator>
				<Stack.Screen name={'books'} component={books} />
				<Stack.Screen name={'book'} component={book} />
        	</Stack.Navigator>
		)
	}
	*/

	function mybooks(){
		return(
			<Stack.Navigator>
				<Stack.Screen name={'books'} component={books} />
				<Stack.Screen name={'book'} component={book} />
			</Stack.Navigator>
		)
	}

	function MyTab(){
		return(
			<Tab.Navigator
			initialRouteName="home"
			tabBarOptions={{
				activeTintColor:'#e91e63'
			}}
			>
				<Tab.Screen 
				name="home"
				component={home}
				options={{
					tabBarLabel:"Home",

					tabBarIcon: ({size,focused,color}) => {
						return (
							<FontAwesome5 name={'home'} />
						);
					  },
				}}/>
				<Tab.Screen 
				name="books"
				component={mybooks}
				options={{
					tabBarLabel:"Books",

					tabBarIcon: ({size,focused,color}) => {
						return (
							<FontAwesome5 name={'book-open'} />
						);
					  },
				}}
				/>
	
	
			</Tab.Navigator>
		)
	}


  return (
	  /*
    <NavigationContainer>
        <Stack.Navigator
				initialRouteName={'Start'}
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name={'start'} component={start} />
				<Stack.Screen name={'home'} component={home} />
				<Stack.Screen name={'books'} component={books} />
				<Stack.Screen name={'book'} component={book} />
        </Stack.Navigator>
		
    </NavigationContainer>
	*/
	
	/*
	<NavigationContainer>
		<Tab.Navigator>
			<Tab.Screen name="home" component={start} />
			<Tab.Screen name="books" component={test} />
		</Tab.Navigator>
	</NavigationContainer>
	 */
	<NavigationContainer>
		<MyTab />
	</NavigationContainer>
  );
}
