

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddBooking,
  AddCard,
  AddService,
  CheckOut,
  ConfirmOTP,
  ContactUs,
  CustomerHome,
  CustomerProfile,
  EditService,
  Faq,
  Language,
  Location,
  Login,
  MapScreen,
  MyPoints,
  MyProfile,
  MyWallet,
  Notifications,
  Payment,
  SearchScreen,
  SendGift,
  SpaDetails,
  Splash,
  TermsConditions,
} from '../pages';
import { RootStackParamList } from '../config/appTypes';
import { MyTabs } from './MyTabs';
import { CustomerTabs } from './CustomerTabs';


const Stack = createNativeStackNavigator<RootStackParamList>();

//add screen to navigation stack
export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="CustomerTabs" component={CustomerTabs} />
      <Stack.Screen name="AddService" component={AddService} />
      <Stack.Screen name="EditService" component={EditService} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="AddBooking" component={AddBooking} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
      <Stack.Screen name="CustomerHome" component={CustomerHome} />
      <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
      <Stack.Screen name="MyPoints" component={MyPoints} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="SpaDetails" component={SpaDetails} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="SendGift" component={SendGift} />

    </Stack.Navigator >
  );
}



