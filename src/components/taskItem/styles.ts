import { StyleSheet } from 'react-native'

import { colors } from '../../../styles/global'

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    height: 64,
    borderRadius: 8,
    paddingLeft: 4,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colors.gray200,
    backgroundColor: colors.gray500,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 99999999,
    borderWidth: 3,
    borderColor: colors.blue,
  },

  taskDescription: {
    color: colors.gray100,
    fontSize: 14,
  },

  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
