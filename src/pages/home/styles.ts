import { StyleSheet } from 'react-native'

import { colors } from '../../../styles/global'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  main: {
    height: '100%',
    paddingHorizontal: 24,
    backgroundColor: colors.gray600,
  },

  inputContainer: {
    width: '100%',
    height: 48,
    marginTop: -24,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },

  input: {
    flex: 1,
    maxWidth: 200,
    height: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray700,
    borderRadius: 6,
    color: colors.gray100,
    backgroundColor: colors.gray500,
  },

  button: {
    minWidth: 48,
    height: '100%',
    padding: 16,
    borderRadius: 6,
    color: colors.white,
    backgroundColor: colors.blueDark,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {}, // TODO Delete this later if it isn't used

  listHeader: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray400,
  },

  listHeaderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },

  emptyListContainer: {
    
  },

  listBody: {
    flex: 1,
  },
})
