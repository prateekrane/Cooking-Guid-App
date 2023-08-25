import { StyleSheet, StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Welcome from './screens/Welcome';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsloaded] = useFonts({
    'innerfont': require('./assets/fonts/IndieFlower-Regular.ttf'),
    'bold': require('./assets/fonts/Kalam-Bold.ttf'),
    'regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'outter': require('./assets/fonts/FingerPaint-Regular.ttf'),

  });
  if (!fontsloaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#351401"} />
      <Stack.Navigator

        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#e2b497",
          contentStyle: { backgroundColor: "#3f2f25" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "bold",
            fontSize: 24,
            color: "#e5c6b3",
          }
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome}
          options={{
            headerShown: false,
            statusBarColor: "#3f2f25",
          }} />
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
          statusBarColor: "#351401",
        }} />

        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{
          statusBarColor: "#351401",
        }} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          statusBarColor: "#351401",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
