import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Logo from "../components/logo";
import { Button } from "react-native-elements";
import { ButtonGroup } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import { DatePickerInput } from "react-native-paper-dates";
import { useNavigation } from "@react-navigation/native";

export default function AddTarefa() {
  const opcoes = ["Pessoal", "Estudo", "Trabalho", "Outro"];

  // Estados para os campos de entrada
  const [titulo, setTitulo] = useState("");
  const [inputData, setInputData] = useState(undefined);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Pessoal");
  const [prioridade, setPrioridade] = useState("Baixa");

  const nav = useNavigation();

  const handleAdicionar = async () => {
    try {
      // Construindo o objeto de dados para enviar para a API
      const consumir = {
        titulo: titulo,
        data: inputData, // Não tenho certeza sobre o formato correto aqui, depende da expectativa da sua API
        descricao: descricao,
        categoria: categoria,
        prioridade: prioridade,
      };

      // Enviar os dados para a API
      const response = await fetch("https://encouraging-blue-bee.cyclic.app/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consumir),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar tarefa",);
      }

      // Se a tarefa for adicionada com sucesso, navegar de volta para a tela inicial
      nav.navigate("home");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return (
    <View style={style.newContainer}>
      <Button
        title="×"
        type="clear"
        buttonStyle={{
          height: 80,
        }}
        titleStyle={{
          color: "#989898",
          fontSize: 70,
        }}
        containerStyle={{
          position: "absolute",
          right: 10,
          top: 0,
        }}
        onPress={() => {
          nav.navigate("home");
        }}
      />
      <Logo />
      <View style={style.divider}></View>
      <View style={style.newContent}>
        <Text style={style.taskTitle}>Nova Tarefa</Text>
        <View style={style.inputArea}>
          <View>
            <Text style={style.inputText}>Título:</Text>
            <TextInput
              placeholder="e.g: Trabalho de Química"
              style={style.input}
              value={titulo}
              onChangeText={setTitulo} // Atualiza o estado 'titulo' com o valor do campo de entrada
            />
          </View>
          <View style={style.inputRow}>
            <Text style={style.inputTextData}>Data:</Text>
            <DatePickerInput
              locale="pt"
              label={""}
              value={inputData}
              onChange={(d) => setInputData(d)}
              mode="outlined"
              startYear={2024}
            />
          </View>
          <View>
            <Text style={style.inputText}>Descrição:</Text>
            <TextInput
              placeholder="e.g: lorem ipsum dolor"
              style={style.input}
              value={descricao}
              onChangeText={setDescricao} // Atualiza o estado 'descricao' com o valor do campo de entrada
            />
          </View>
          <View>
            <Text style={style.inputText}>Categoria:</Text>
            <SelectDropdown
              data={opcoes}
              defaultButtonText="Escolha uma Categoria"
              defaultValue={"pessoal"}
              buttonStyle={style.buttonStyle}
              buttonTextStyle={style.buttonTextStyle}
              dropdownStyle={style.dropdownStyle}
              rowStyle={style.rowStyle}
              rowTextStyle={style.rowTextStyle}
              dropdownIconPosition="right"
              onSelect={setCategoria} // Atualiza o estado 'categoria' com o valor selecionado do dropdown
            />
          </View>
          <View>
            <Text style={style.inputText}>Prioridade:</Text>
            <ButtonGroup
              buttons={["Baixa", "Média", "Alta"]}
              selectedIndex={prioridade === "Baixa" ? 0 : prioridade === "Média" ? 1 : 2}
              onPress={(value) => setPrioridade(value === 0 ? "Baixa" : value === 1 ? "Média" : "Alta")} // Atualiza o estado 'prioridade' com o valor selecionado do ButtonGroup
              containerStyle={{
                alignItems: "center",
                justifyContent: `center`,
                width: `100%`,
                height: 50,
                marginStart: 0,
              }}
              selectedButtonStyle={{
                backgroundColor: "#A3B18A",
              }}
            />
          </View>
          <View>
            <Button
              title="Adicionar"
              buttonStyle={{
                backgroundColor: "#A3B18A",
                height: 60,
                borderRadius: 50,
              }}
              titleStyle={{
                fontSize: 30,
                fontWeight: "bold",
              }}
              containerStyle={{
                width: "60%",
                alignSelf: "center",
                bottom: -10,
              }}
              onPress={handleAdicionar} // Chama a função handleAdicionar ao pressionar o botão
            />
          </View>
        </View>
      </View>
    </View>
  );
}


export const style = StyleSheet.create({
  newContainer: {
    backgroundColor: "#FFFFFF",
    height: `100%`,
  },
  closeBtn: {
    fontSize: 70,
    position: "absolute",
    right: 25,
    top: 25,
    color: "#9E9E9E",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  newContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#3A5A40",
    top: -10,
  },
  inputDate: {
    width: "90%",
    backgroundColor: null,
  },
  inputArea: {
    gap: 20,
    margin: 10,
    height: "100%",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 1,
  },
  inputText: {
    fontSize: 25,
    color: "#444",
  },
  inputTextData: {
    fontSize: 25,
    color: "#444",
    width: "40%",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 18,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  inputDate: {
    fontSize: 15,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  rowStyle: {
    //estilo das linhas do botao dropdown (dentro)
    backgroundColor: null,
  },
  rowTextStyle: {
    //estilo dos textos de dentro do botao dropdow
    backgroundColor: null,
  },
  dropdownStyle: {
    //estilo do botao dropdown (dentro)
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  buttonStyle: {
    //estilo do botao dropdown (fora)
    width: "100%",
    backgroundColor: null,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  buttonTextStyle: {
    // estilo do texto do botao dropdow (fora)
    color: "#686868",
    textAlign: "left",
  },
});
