import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Complaints from "../screens/Complaints";
import AddFunds from "../screens/AddFunds";
import NewComplaint from "../screens/NewComplaint";
import Success from "../screens/Success";
import ViewComplaint from "../screens/ViewComplaint";
import Feedbacks from "../screens/Feedbacks";
import DonateSuccess from "../screens/DonateSuccess";
import AddDonar from "../screens/AddDonar";
import  { PaymentOption } from "../screens/paymentOption";
import ViewFunds from "../screens/viewFunds";
import DonarSuccess from "../screens/DonarSuccess";
import ViewDonars from "../screens/ViewDonars";
import PaymentSuccess from "../screens/PaymentSuccess";
import DonationHome from "../screens/DonationHome";


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
       <Stack.Screen
        name="AddFunds"
        component={AddFunds}
        options={headerOptions}
      />
       <Stack.Screen
        name="DonateSuccess"
        component={DonateSuccess}
        options={headerOptions}
      />
      <Stack.Screen
        name="AddDonar"
        component={AddDonar}
        options={headerOptions}
      />
      <Stack.Screen
        name="PaymentOption"
        component={PaymentOption}
        options={headerOptions}
      />
       <Stack.Screen
        name="View Funds"
        component={ViewFunds}
        options={headerOptions}
      />
         <Stack.Screen
        name="DonarSuccess"
        component={DonarSuccess}
        options={headerOptions}
      />
         <Stack.Screen
        name="ViewDonars"
        component={ViewDonars}
        options={headerOptions}
      />

      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={headerOptions}
      />
        <Stack.Screen
        name="Donations"
        component={DonationHome}
        options={headerOptions}
      />
     
    </Stack.Navigator>
  );
}
