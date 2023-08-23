import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import { Checkbox } from 'react-native-paper'

import { styles } from './styles'

import { Trash } from 'phosphor-react'
import { colors } from '../../../styles/global'

interface TaskItemProps {
  description: string
  deleteTask: (desc: string) => void
  completedTasks: number
  setCompletedTasks: (amount: number) => void
}

export function TaskItem({
  description,
  deleteTask,
  completedTasks,
  setCompletedTasks,
}: TaskItemProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleTaskChecking() {
    if (isChecked) {
      setCompletedTasks(completedTasks - 1)
    } else if (!isChecked) {
      setCompletedTasks(completedTasks + 1)
    }

    setIsChecked(!isChecked)
  }

  function onTaskDelete() {
    deleteTask(description)

    if (isChecked) {
      setCompletedTasks(completedTasks - 1)
    }
  }

  return (
    <View style={styles.taskContainer}>
      <Checkbox
        color={colors.blue}
        status={isChecked ? 'checked' : 'unchecked'}
        onPress={() => handleTaskChecking()}
      />

      <Text style={styles.taskDescription}>{description}</Text>

      <TouchableOpacity
        style={styles.deleteButton}
        activeOpacity={0.6}
        onPress={onTaskDelete}
      >
        <Trash size={16} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  )
}
