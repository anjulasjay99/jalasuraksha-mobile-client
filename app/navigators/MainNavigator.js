import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Complaints from "../screens/Complaints";
import AddFunds from "../screens/AddFunds";
import NewComplaint from "../screens/NewComplaint";
import Success from "../screens/Success";
import ViewComplaint from "../screens/ViewComplaint";
import Feedbacks from "../screens/Feedbacks";

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
      <Stack.Screen
        name="New Complaint"
        component={NewComplaint}
        options={headerOptions}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={headerOptions}
      />
      <Stack.Screen
        name="View Complaint"
        component={ViewComplaint}
        options={headerOptions}
      />
      <Stack.Screen
        name="Feedbacks"
        component={Feedbacks}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
