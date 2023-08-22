import { View } from 'react-native'

import { styles } from './styles'

interface NumberPillProps {
  value: string
}

export function NumberPill({ value }: NumberPillProps) {
  return <View style={styles.pillContainer}>{value}</View>
}
