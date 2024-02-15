import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardTarefa() {
  const nav = useNavigation();
  return (
    <View>
      <Pressable
        style={style.cardContainer}
        onPress={() => {
          nav.navigate("tarefaAberta");
        }}
      >
        <View style={style.nameContainer}>
          <Text style={style.taskName}>nome da tarefa</Text>
          <View style={style.taskSubContainer}>
            <Text style={style.taskSub}>29/01/2024</Text>
            <Text style={style.taskSub}>•</Text>
            <Text style={style.taskSub}>Trabalho</Text>
          </View>
        </View>
        <View style={style.taskPriority} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 15,
    shadowColor: "#00000040",
    elevation: 20,
  },
  taskStatus: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  nameContainer: {
    gap: 3,
  },
  taskName: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
  taskSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskSub: {
    color: "#686868",
    fontSize: 16,
  },
  taskPriority: {
    backgroundColor: "#FF4F4F",
    width: 25,
    height: "100%",
    borderRadius: 50,
    position: "absolute",
    right: 10,
  },
});
