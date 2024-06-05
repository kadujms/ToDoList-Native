import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash({}) {
  const nav = useNavigation();

  return (
    <>
      <View style={style.background}>
        <View style={style.logoContainer}>
          <View style={style.logo}>
            <Image source={require("../assets/images/check.png")} />
            <Image source={require("../assets/images/check.png")} />
          </View>
          <View style={style.logo2}>
            <Text style={style.text1}>Organiza</Text>
            <Text style={style.text2}>to-do</Text>
          </View>
        </View>
        <Text style={style.descricao}>
          O aplicativo para organizar suas atividades, deveres e tarefas.
        </Text>
        <View style={style.buttonContainer}>
          <Pressable
            style={style.button}
            onPress={() => {
              nav.navigate("home");
            }}
          >
            <Text style={style.buttonText}>Vamos lá! </Text>
            <Image
              source={require("../assets/images/seta.png")}
              style={style.btnImage}
            />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: "#3A5A40",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    marginTop: 250,
    flexDirection: "row",
    gap: 5,
  },
  text1: {
    fontSize: 60,
    color: "#FFF",
    paddingTop: 8,
  },
  text2: {
    fontSize: 60,
    color: "#FFF",
    paddingTop: 10,
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
  descricao: {
    width: "70%",
    marginTop: -150,
    textAlign: "center",
    fontSize: 35,
    color: "#fff",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "rgba(208, 208, 208, 0.2)",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginStart: 100,
    marginEnd: 50,
  },
  btnImage: {
    resizeMode: "contain",
    width: 50,
    height: 30,
  },
});
