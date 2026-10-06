import React from "react";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import LoginScreen from "../Login";
import CadastroScreen from "../Cadastro";
import SplashScreen from "../SplashPage";
import Home from "../Home";
import Calendar from "../Cadastro";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// ==========================================
// TABS
// ==========================================

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#00A19C",
        tabBarInactiveTintColor: "#999999",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
        },
      }}
    >

      {/* HOME */}

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <Feather
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


// ==========================================
// ROTAS PRINCIPAIS
// ==========================================

export function AppRoutes() {

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >

      {/* SPLASH */}

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />


      {/* LOGIN */}

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />


      {/* CADASTRO */}

      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
      />


      {/* APLICAÇÃO */}

      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "Calendário",

          tabBarIcon: ({ color, size }) => (
            <Feather
              name="calendar"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Stack.Navigator>
  );
}