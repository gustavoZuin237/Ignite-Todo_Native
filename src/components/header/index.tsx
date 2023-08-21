import { View, Image } from 'react-native'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HeaderImage from '../../../assets/header-image.png'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={HeaderImage}
        height={32}
        width={110}
        alt=""
      />
    </View>
  )
}
