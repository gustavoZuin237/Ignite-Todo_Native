import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { styles } from './styles'
import { colors } from '../../../styles/global'

import { Header } from '../../components/header'

export function Home() {
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
          />

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            +
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <View style={styles.listHeaderItem}>
              <Text style={{ color: colors.blue, fontWeight: '700' }}>
                Criadas
              </Text>
            </View>
            <View style={styles.listHeaderItem}>
              <Text style={{ color: colors.purple, fontWeight: '700' }}>
                Concluídas
              </Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={[]}
              renderItem={() => null}
              ListEmptyComponent={
                <Text>
                  Você ainda não tem tarefas cadastradas Crie tarefas e organize
                  seus itens a fazer
                </Text>
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
