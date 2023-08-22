import { StyleSheet } from 'react-native'

import { colors } from '../../../styles/global'

export const styles = StyleSheet.create({
  pillContainer: {
    width: 25,
    height: 20,
    borderRadius: 9999999,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.gray200,
    backgroundColor: colors.gray400,
  },
})
