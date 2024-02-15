import { StyleSheet, Text, View, Image } from "react-native";

export default function Logo() {
  return (
    <>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/checkLogo.png")}
          style={styles.logoImg}
        />
        <Text style={styles.logoText}>To-do</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 30,
  },
  logoText: {
    position: "absolute",
    fontSize: 70,
    color: "#3A5A40",
    fontWeight: "700",
    fontStyle: "italic",
    paddingTop: 20,
  },
  logoImg: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    marginStart: -150,
  },
});
