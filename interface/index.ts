import { ReactNode } from 'react'
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
    ImageSourcePropType,
    ImageStyle,
} from 'react-native'

export interface ITextProps {
    textStyles?: StyleProp<TextStyle>
    children: ReactNode
}

export interface IButtonProps extends ITextProps {
    btnStyles?: StyleProp<ViewStyle>
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export interface IGreetingProps {
    mainText: string
    subText: string
    mainTextStyles?: StyleProp<TextStyle>
    subTextStyles?: StyleProp<TextStyle>
}

export interface IProfileProps {
    img: ImageSourcePropType
    imgStyle?: StyleProp<ImageStyle>
    imgContainerStyle?: StyleProp<ViewStyle>
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}
