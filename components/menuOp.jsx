import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Menu() {
  return (
    <View style={style.menuContainer}>
      <View style={style.headerMenu}>
        <Pressable>
          <Text style={style.menuText}>Tudo</Text>
        </Pressable>
      </View>
      <View style={style.menuOptions}>
        <Pressable>
          <Text style={style.menuText2}>Baixa</Text>
        </Pressable>
        <Pressable>
          <Text style={style.menuText2}>Média</Text>
        </Pressable>
        <Pressable>
          <Text style={style.menuText2}>Alta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
  },
  headerMenu: {
    flexDirection: "row",
    marginStart: 20,
  },
  menuOptions: {
    width: 100,
    flexDirection: "row",
    gap: 5,
  },
  menuText: {
    fontWeight: "bold",
    fontSize: 25,
    marginEnd: 70,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 100,
  },
  menuText2: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#989898",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 100,
  },
  tudoBackground: {
    backgroundColor: "#DAD7CD",
  },
  baixaBackground: {
    backgroundColor: "#BDFFA6",
  },
  mediaBackground: {
    backgroundColor: "#FFC500",
  },
  altaBackground: {
    backgroundColor: "#FFBBBBCC",
  },
  noBackground: {
    backgroundColor: "none",
  },
});
