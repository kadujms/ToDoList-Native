// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";

// export default function Tarefa() {
//   const [tasks, setTasks] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(
//           "https://encouraging-blue-bee.cyclic.app/tasks"
//         );
//         setTasks(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Erro ao obter os dados da API:", error);
//         setError(true);
//         setIsLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   return (
//     <View>
//       {isLoading ? (
//         <Text>Carregando...</Text>
//       ) : error ? (
//         <Text>Ocorreu um erro ao carregar os dados da API.</Text>
//       ) : (
//         Array.isArray(tasks) && tasks.length > 0 ? (
//           tasks.map((task) => (
//             <View key={task._id} style={style.cardContainer}>
//               <View style={style.nameContainer}>
//                 <Text style={style.taskName}>{task.titulo}</Text>
//                 <View style={style.taskSubContainer}>
//                   <Text style={style.taskSub}>{task.data}</Text>
//                   <Text style={style.taskSub}>•</Text>
//                   <Text style={style.taskSub}>{task.categoria}</Text>
//                 </View>
//               </View>
//               <View style={style.taskPriority} />
//             </View>
//           ))
//         ) : (
//           <Text>Nenhuma tarefa encontrada.</Text>
//         )
//       )}
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: "#FFF",
//     marginHorizontal: 25,
//     marginVertical: 10,
//     borderRadius: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 15,
//     padding: 15,
//     shadowColor: "#00000040",
//     elevation: 20,
//   },
//   taskStatus: {
//     resizeMode: "contain",
//     height: 50,
//     width: 50,
//   },
//   nameContainer: {
//     gap: 3,
//   },
//   taskName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textTransform: "capitalize",
//     fontStyle: "italic",
//   },
//   taskSubContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   taskSub: {
//     color: "#686868",
//     fontSize: 16,
//   },
//   taskPriority: {
//     backgroundColor: "#FF4F4F",
//     width: 25,
//     height: "100%",
//     borderRadius: 50,
//     position: "absolute",
//     right: 10,
//   },
// });


import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"; // Importe TouchableOpacity para tornar a View clicável
import { useNavigation } from "@react-navigation/native";
import { getTasks } from "../.././service/tarefas";
import { axios } from "axios";


export default function Tarefa() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tarefas, setTarefas] = useState({ tasks: [] });
  const nav = useNavigation();

  useEffect(() => {
    fetch("https://encouraging-blue-bee.cyclic.app/tasks")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar tarefas');
        }
        return response.json();
      })
      .then(data => {
        // Remover informações de hora das datas
        const tarefasComDataAjustada = data.tasks.map(tarefa => ({
          ...tarefa,
          data: tarefa.data.split('T')[0] // Mantém apenas a parte da data
          
        }));
        setIsLoaded(true);
        setTarefas(prevTarefas => ({
          tasks: [...prevTarefas.tasks, ...tarefasComDataAjustada]
        }));
      })
      .catch(error => {
        setError(error);
        setIsLoaded(true);
      });
  }, []);
  useEffect(() => {
    console.log('Tarefas atualizadas:', tarefas);
  }, [tarefas]);

  const navigateToTarefaAberta = (tarefa) => {
    nav.navigate("tarefaAberta");
  };

  console.log("Error:", error);
  console.log("Is Loaded:", isLoaded);
  console.log("Tarefas:", tarefas);

  if (error) {
    return <View><Text>Erro: {error.message}</Text></View>;
  } else if (!isLoaded) {
    return <View><Text style={style.backgroundText}>Carregando...</Text></View>;
  } else if (tarefas.tasks.length > 0) {
    return (
      <ScrollView>
        {tarefas.tasks.map((tarefa, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToTarefaAberta(tarefa)}>
            <View style={style.cardContainer}>
              <View style={style.nameContainer}>
                <Text style={style.taskName}>{tarefa.titulo}</Text>
                <View style={style.taskSubContainer}>
                  <Text style={style.taskSub}>{tarefa.data}</Text>
                  <Text style={style.taskSub}>•</Text>
                  <Text style={style.taskSub}>{tarefa.categoria}</Text>
                </View>
              </View>
              <View style={style.taskPriority} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  } else {
    return <Text style={style.backgroundText}>Nenhuma tarefa encontrada.</Text>;
  }
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
  backgroundText: {
    color: "#333",
    alignSelf: "center",
    textAlign: "left",
    fontSize: 35,
    fontWeight: "bold",
    padding: 25,
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
