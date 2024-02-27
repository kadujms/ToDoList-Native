// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable,
//   TextInput,
//   Modal,
// } from "react-native";
// import { DatePickerInput } from "react-native-paper-dates";
// import { useState } from "react";
// import Logo from "../components/logo";
// import SelectDropdown from "react-native-select-dropdown";
// import { Button } from "react-native-elements";
// import { useNavigation } from "@react-navigation/native";
// import { ButtonGroup } from "@rneui/themed";



// export default function TarefaAberta() {
//   //as categorias possiveis pra tarefa (por padrao ta pessoal)
//   const categoria = ["Pessoal", "Estudo", "Trabalho", "Outro"];

//   //useState para escolher a prioridade da tarefa
//   const [selectedIndex, setSelectedIndex] = useState([0, 2, 3]);

//   //useState pra escolher a data
//   const [inputData, setInputData] = useState(undefined);

//   //useNavigation pra navegar
//   const nav = useNavigation();

//   //usestate para abrir a modal de confirmação de exclusão
//   const [isOpen, setIsOpen] = useState(false);

  

//   return (
//     <View style={style.newContainer}>
//       <Button
//         title="×"
//         type="clear"
//         buttonStyle={{
//           height: 80,
//         }}
//         titleStyle={{
//           color: "#989898",
//           fontSize: 70,
//         }}
//         containerStyle={{
//           position: "absolute",
//           right: 10,
//           top: 0,
//         }}
//         onPress={() => {
//           nav.navigate("home");
//         }}
//       />
//       <Logo />
//       <View style={style.divider}></View>
//       <View style={style.newContent}>
//         <View style={style.titleRow}>
//           <TextInput style={style.taskTitle}>Nome da Tarefa ×</TextInput>
//           <Image
//             source={require("../assets/images/edit-icon.png")}
//             style={style.titleIcon}
//           />
//         </View>
//         <View style={style.inputArea}>
//           <View style={style.inputRow}>
//             <Text style={style.inputTextData}>Data:</Text>
//             <DatePickerInput
//               locale="pt"
//               label={""}
//               value={inputData}
//               onChange={(d) => setInputData(d)}
//               mode="outlined"
//               startYear={2024}
//             />
//           </View>
//           <View>
//             <Text style={style.inputText}>Descrição:</Text>
//             <TextInput
//               placeholder="e.g: lorem ipsum dolor"
//               style={style.input}
//             ></TextInput>
//           </View>
//           <View>
//             <Text style={style.inputText}>Categoria:</Text>
//             <SelectDropdown
//               data={categoria}
//               defaultButtonText="Escolha uma Categoria"
//               defaultValue={"pessoal"}
//               buttonStyle={style.buttonStyle}
//               buttonTextStyle={style.buttonTextStyle}
//               dropdownStyle={style.dropdownStyle}
//               rowStyle={style.rowStyle}
//               rowTextStyle={style.rowTextStyle}
//               dropdownIconPosition="right"
//             />
//           </View>
//           <View>
//             <Text style={style.inputText}>Prioridade:</Text>
//             <ButtonGroup
//               buttons={["Baixa", "Média", "Alta"]}
//               selectedIndex={selectedIndex}
//               onPress={(value) => {
//                 setSelectedIndex(value);
//               }}
//               containerStyle={{
//                 alignItems: "center",
//                 justifyContent: `center`,
//                 width: `100%`,
//                 height: 50,
//                 marginStart: 0,
//               }}
//               selectedButtonStyle={{
//                 backgroundColor: "#A3B18A",
//               }}
//               buttonStyle={{}}
//             />
//           </View>
//           <View style={style.btnRow2}>
//             {/* botao de excluir a tarefa */}
//             <Pressable
//               onPress={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               <Image source={require("../assets/images/delete-button.png")} />
//             </Pressable>
//             {/* botao para salvar a tarefa editada */}
//             <Pressable>
//               <Image source={require("../assets/images/save-button.png")} />
//             </Pressable>
//           </View>
//           <Modal
//             visible={isOpen}
//             transparent={true}
//             animationType="none"
//             onRequestClose={() => {
//               setIsOpen(!isOpen);
//             }}
//           >
//             <View style={modal.modalContainer}>
//               <View style={modal.modalBackground}>
//                 <View style={modal.textAreaContainer}>
//                   <Text style={modal.modalTitle}>Tem certeza?</Text>
//                   <Text style={modal.modalText}>
//                     Essa ação não pode ser revertida!
//                   </Text>
//                 </View>
//                 <View style={modal.btnContainer}>
//                   <Pressable
//                     onPress={() => {
//                       setIsOpen(!isOpen);
//                     }}
//                     style={modal.cancelBtn}
//                   >
//                     <Text style={modal.btnText}>Cancelar</Text>
//                   </Pressable>
//                   <Pressable style={modal.confirmlBtn}>
//                     <Text style={modal.btnText}>Excluir</Text>
//                   </Pressable>
//                 </View>
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </View>
//     </View>
//   );
// }

// //style geral
// const style = StyleSheet.create({
//   newContainer: {
//     backgroundColor: "#FFFFFF",
//     height: `100%`,
//   },
//   divider: {
//     height: 1,
//     width: "100%",
//     backgroundColor: "#ccc",
//   },
//   newContent: {
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   taskTitle: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#686868",
//     margin: 10,
//   },
//   titleRow: {
//     flexDirection: "row",
//     gap: 10,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   titleIcon: {
//     resizeMode: "contain",
//     width: 30,
//     height: 30,
//   },
//   inputDate: {
//     width: "90%",
//     backgroundColor: null,
//   },
//   inputArea: {
//     gap: 30,
//     margin: 10,
//     height: "100%",
//   },
//   inputRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "90%",
//     marginVertical: 1,
//   },
//   inputText: {
//     fontSize: 25,
//     color: "#444",
//   },
//   inputTextData: {
//     fontSize: 25,
//     color: "#444",
//     width: "40%",
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     fontSize: 18,
//     textAlign: "left",
//     borderBottomWidth: 1,
//     borderBottomColor: "#D9D9D9",
//   },
//   inputDate: {
//     fontSize: 15,
//   },
//   btnRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     width: "100%",
//     marginVertical: 20,
//   },
//   rowStyle: {
//     //estilo das linhas do botao dropdown (dentro)
//     backgroundColor: null,
//   },
//   rowTextStyle: {
//     //estilo dos textos de dentro do botao dropdow
//     backgroundColor: null,
//   },
//   dropdownStyle: {
//     //estilo do botao dropdown (dentro)
//     backgroundColor: "#FFF",
//     borderRadius: 10,
//   },
//   buttonStyle: {
//     //estilo do botao dropdown (fora)
//     width: "100%",
//     backgroundColor: null,
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: "#D9D9D9",
//   },
//   buttonTextStyle: {
//     // estilo do texto do botao dropdow (fora)
//     color: "#686868",
//     textAlign: "left",
//   },
//   btnRow2: {
//     flexDirection: `row`,
//     justifyContent: `space-between`,
//     bottom: `-10%`,
//   },
// });

// //style do modal
// const modal = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: `center`,
//     alignItems: `center`,
//     backgroundColor: `rgba(0, 0, 0, 0.60)`,
//   },
//   modalBackground: {
//     backgroundColor: `#FFF`,
//     borderRadius: 40,
//     width: `80%`,
//   },
//   textAreaContainer: {
//     gap: 10,
//     alignItems: `center`,
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 38,
//     fontWeight: `800`,
//     color: `#3A5A40`,
//   },
//   modalText: {
//     fontSize: 24,
//     paddingBottom: 20,
//     color: `#989898`,
//     textAlign: `center`,
//     width: `80%`,
//     fontWeight: `500`,
//   },
//   btnContainer: {
//     flexDirection: `row`,
//     alignItems: `center`,
//     justifyContent: `center`,
//     gap: 20,
//     paddingBottom: 20,
//   },
//   cancelBtn: {
//     backgroundColor: `#989898`,
//     padding: 10,
//     paddingHorizontal: 15,
//     width: `40`,
//     alignItems: `center`,
//     borderRadius: 50,
//   },
//   confirmlBtn: {
//     backgroundColor: `#FF4F4F`,
//     padding: 10,
//     width: `40%`,
//     alignItems: `center`,
//     borderRadius: 50,
//   },
//   btnText: {
//     fontSize: 30,
//     fontWeight: `600`,
//     color: `#FFF`,
//   },
// });



// outra parte abaixo 


import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import { useState } from "react";
import Logo from "../components/logo";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { ButtonGroup } from "@rneui/themed";



export default function TarefaAberta() {
  //as categorias possiveis pra tarefa (por padrao ta pessoal)
  const categoria = ["Pessoal", "Estudo", "Trabalho", "Outro"];

  //useState para escolher a prioridade da tarefa
  const [selectedIndex, setSelectedIndex] = useState([0, 2, 3]);

  //useState pra escolher a data
  const [inputData, setInputData] = useState(undefined);

  //useNavigation pra navegar
  const nav = useNavigation();

  //usestate para abrir a modal de confirmação de exclusão
  const [isOpen, setIsOpen] = useState(false);

  const [taskId, setTaskId] = useState('${_id}'); // Defina o ID da tarefa aqui

  const handleDelete = () => {
    // Exibir a modal de confirmação
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    // Chamada de API para deletar a tarefa
    fetch(`https://encouraging-blue-bee.cyclic.app/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setIsOpen(false); // Fechar a modal
          nav.navigate("home"); // Navegar de volta para a tela inicial ou tratar conforme necessário
        } else {
          console.error("Erro ao excluir a tarefa:", response.status);
        }
      })
      .catch(error => {
        console.error("Erro ao excluir a tarefa:", error);
      });
  };

  const handleSave = () => {
    // Chamada de API para salvar a tarefa editada
    fetch(`https://encouraging-blue-bee.cyclic.app/tasks/${taskId}`, {
      method: 'PUT', // Ou 'PATCH' dependendo da sua API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: task.titulo,
        descricao: task.descricao,
        data: inputData, // Atualize com a data desejada
        categoria: task.categoria,
        prioridade: task.prioridade,

      }),
    })
      .then(response => {
        if (response.ok) {
          // Tratar conforme necessário, por exemplo, exibir uma mensagem de sucesso
        } else {
          console.error("Erro ao salvar a tarefa:", response.status);
        }
      })
      .catch(error => {
        console.error("Erro ao salvar a tarefa:", error);
      });
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
        <View style={style.titleRow}>
          <TextInput style={style.taskTitle}>Nome da Tarefa ×</TextInput>
          <Image
            source={require("../assets/images/edit-icon.png")}
            style={style.titleIcon}
          />
        </View>
        <View style={style.inputArea}>
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
            ></TextInput>
          </View>
          <View>
            <Text style={style.inputText}>Categoria:</Text>
            <SelectDropdown
              data={categoria}
              defaultButtonText="Escolha uma Categoria"
              defaultValue={"pessoal"}
              buttonStyle={style.buttonStyle}
              buttonTextStyle={style.buttonTextStyle}
              dropdownStyle={style.dropdownStyle}
              rowStyle={style.rowStyle}
              rowTextStyle={style.rowTextStyle}
              dropdownIconPosition="right"
            />
          </View>
          <View>
            <Text style={style.inputText}>Prioridade:</Text>
            <ButtonGroup
              buttons={["Baixa", "Média", "Alta"]}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
              }}
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
              buttonStyle={{}}
            />
          </View>
          <View style={style.btnRow2}>
            {/* botao de excluir a tarefa */}
            <Pressable
              onPress={handleDelete}
            >
              <Image source={require("../assets/images/delete-button.png")} />
            </Pressable >
            {/* botao para salvar a tarefa editada */}
            <Pressable onPress={handleSave}
            >
              <Image source={require("../assets/images/save-button.png")} />
            </Pressable>
          </View>
          <Modal
            visible={isOpen}
            transparent={true}
            animationType="none"
            onRequestClose={() => {
              setIsOpen(!isOpen);
            }}
          >
            <View style={modal.modalContainer}>
              <View style={modal.modalBackground}>
                <View style={modal.textAreaContainer}>
                  <Text style={modal.modalTitle}>Tem certeza?</Text>
                  <Text style={modal.modalText}>
                    Essa ação não pode ser revertida!
                  </Text>
                </View>
                <View style={modal.btnContainer}>
                  <Pressable
                    onPress={() => {
                      setIsOpen(!isOpen);
                    }}
                    // style={modal.cancelBtn}

                    style={modal.cancelBtn}
                  >
                    <Text style={modal.btnText}>Cancelar</Text>
                  </Pressable>
                  <Pressable style={modal.confirmlBtn} onPress={handleConfirmDelete} >
                    <Text style={modal.btnText}>Excluir</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

//style geral
const style = StyleSheet.create({
  newContainer: {
    backgroundColor: "#FFFFFF",
    height: `100%`,
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#686868",
    margin: 10,
  },
  titleRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  titleIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  inputDate: {
    width: "90%",
    backgroundColor: null,
  },
  inputArea: {
    gap: 30,
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
  btnRow2: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    bottom: `-10%`,
  },
});

//style do modal
const modal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 0.60)`,
  },
  modalBackground: {
    backgroundColor: `#FFF`,
    borderRadius: 40,
    width: `80%`,
  },
  textAreaContainer: {
    gap: 10,
    alignItems: `center`,
    padding: 20,
  },
  modalTitle: {
    fontSize: 38,
    fontWeight: `800`,
    color: `#3A5A40`,
  },
  modalText: {
    fontSize: 24,
    paddingBottom: 20,
    color: `#989898`,
    textAlign: `center`,
    width: `80%`,
    fontWeight: `500`,
  },
  btnContainer: {
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: 20,
    paddingBottom: 20,
  },
  cancelBtn: {
    backgroundColor: `#989898`,
    padding: 10,
    paddingHorizontal: 15,
    width: `40`,
    alignItems: `center`,
    borderRadius: 50,
  },
  confirmlBtn: {
    backgroundColor: `#FF4F4F`,
    padding: 10,
    width: `40%`,
    alignItems: `center`,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 30,
    fontWeight: `600`,
    color: `#FFF`,
  },
});