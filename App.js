import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Setting" onPress={() => navigation.navigate("Setting")} />
    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        screenOptions={{
          drawerActiveBackgroundColor:'#fb8c00',
          drawerActiveTintColor:"white",
          // headerShown: false
        }}
        drawerContent={
          ({navigation})=>(
            <SafeAreaView>
              <Text>Custom Drawer</Text>
              <Button title="Drawer 닫기" onPress={()=>navigation.closeDrawer()} />
            </SafeAreaView>
          )
        }
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "홈" }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: "설정" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
