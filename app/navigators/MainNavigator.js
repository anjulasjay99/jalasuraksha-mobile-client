import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Complaints from "../screens/Complaints";

//create a stack navigator
const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: "#0077C2",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={headerOptions} />
      <Stack.Screen
        name="Complaints"
        component={Complaints}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
