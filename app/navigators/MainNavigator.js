import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Complaints from "../screens/Complaints";
import AddFunds from "../screens/AddFunds";

//create a stack navigator
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Complaints" component={Complaints} />
      <Stack.Screen name="Add Donates" component={AddFunds} />
    </Stack.Navigator>
  );
}
