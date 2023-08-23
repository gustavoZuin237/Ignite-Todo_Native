import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'

import { styles } from './styles'
import { colors } from '../../../styles/global'

import { PlusCircle } from 'phosphor-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Clipboard from '../../../assets/clipboard.svg'

import { Header } from '../../components/header'
import { NumberPill } from '../../components/numberPill'
import { TaskItem } from '../../components/taskItem'
import { useState } from 'react'

export function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleAddTask() {
    setTasks([...tasks, task])
    setTask('')
  }

  function handleDeleteTask(desc: string) {
    const filteredTasks = tasks.filter((task) => task !== desc)

    setTasks(filteredTasks)
  }

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>

      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            onChangeText={setTask}
            value={task}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={handleAddTask}
          >
            <PlusCircle size={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <View style={styles.listHeaderItem}>
              <Text style={{ color: colors.blue, fontWeight: '700' }}>
                Criadas
              </Text>
              <NumberPill value={`${tasks.length}`} />
            </View>
            <View style={styles.listHeaderItem}>
              <Text style={{ color: colors.purple, fontWeight: '700' }}>
                Concluídas
              </Text>
              <NumberPill value={`${completedTasks}`} />
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={tasks}
              keyExtractor={(task) => task}
              renderItem={(task) => (
                <TaskItem
                  key={task.index}
                  description={task.item}
                  deleteTask={handleDeleteTask}
                  completedTasks={completedTasks}
                  setCompletedTasks={setCompletedTasks}
                />
              )}
              ListEmptyComponent={
                <View style={styles.emptyListContainer}>
                  <Image
                    source={Clipboard}
                    style={styles.emptyListImage}
                    width={56}
                    height={56}
                    alt=""
                  />

                  <Text style={styles.emptyListText}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>{' '}
                    <br />
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              }
            ></FlatList>
          </View>
        </View>

        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
      </View>
    </View>
  )
}
