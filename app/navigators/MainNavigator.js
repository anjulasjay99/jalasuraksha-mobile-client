import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Complaints from "../screens/Complaints";

//create a stack navigator
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Complaints" component={Complaints} />
    </Stack.Navigator>
  );
}
