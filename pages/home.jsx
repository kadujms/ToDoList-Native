import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import Logo from "../components/logo";
import Menu from "../components/menuOp";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Tarefa from "../components/cards/tarefa";
import React, { useEffect, useState } from "react";

export default function Home({}) {
  const nav = useNavigation()
  return (
    <>
      <View>
        <Logo />
        <Menu />
        <View style={style.divider} />
        <View style={style.backgroundContainer}>
          {/* <Text style={style.backgroundText}>Parece que você ainda não adicionou nenhuma tarefa!</Text> */}
         
            <>
              
                <Tarefa/>
              
            </>
          
              
          
          

          <Button
            title="Adicionar Tarefa"
            icon={<Icon name="add" size={25} color="#FFF" />}
            buttonStyle={{
              backgroundColor: "#A3B18A",
              height: 50,
              borderRadius: 100,
              alignItems: "center",
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
            }}
            containerStyle={{
              width: "50%",
              alignSelf: "center",
              position: "absolute",
              bottom: 440,
            }}
            onPress={() => {
              nav.navigate("addTarefa");
            }}
          />
        </View>
      </View>
    </>
  );
}

export const style = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  backgroundContainer: {
    backgroundColor: "#EDEDED",
    width: "100%",
    minHeight: "100%",
    paddingVertical: 10,
  },
  backgroundText: {
    color: "#333",
    alignSelf: "center",
    textAlign: "left",
    fontSize: 45,
    fontWeight: "bold",
    padding: 25,
  },
});
