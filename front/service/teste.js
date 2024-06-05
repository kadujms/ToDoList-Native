import { View } from "react-native"
import Tarefa from "../components/cards/tarefa"
import { useEffect, useState } from "react";
import { getTasks } from "./tarefas";



export default function Teste({}) {

  const [tarefas, setTarefas] = useState([]);

  async function getAllTasks(){
    try{
      const taskResponse = await  getTasks();
      setTarefas(taskResponse.data);
      console.log(taskResponse.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllTasks()
  }, [])

  return (
    <>
      <View>
          {/* <Text style={style.backgroundText}>Parece que você ainda não adicionou nenhuma tarefa!</Text> */}
          {tarefas.length > 0 && (
            <>
              {tarefas.forEach(tarefa => (
                <Tarefa key={tarefa.id} data={tarefa.data} categoria={tarefa.categoria} titulo={tarefa.titulo} />
              ))}
            </>
          )}
        </View>
    </>
  );
}