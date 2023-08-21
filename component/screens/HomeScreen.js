import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "홈" });
  }, [navigation]);
  return (
    <View>
      <Button
        title="디테일01"
        onPress={() => navigation.push("Detail", { id: 1 })}
      />
      <Button
        title="디테일02"
        onPress={() => navigation.push("Detail", { id: 2 })}
      />
      <Button
        title="디테일03"
        onPress={() => navigation.push("Detail", { id: 3 })}
      />
      <Button
        title="Headerless"
        onPress={() => navigation.push("Headerless")}
      />
    </View>
  );
}

export default HomeScreen;
