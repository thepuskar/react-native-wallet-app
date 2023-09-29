import { ReactNode } from 'react'
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native'

export interface ITextProps {
    textStyles?: StyleProp<TextStyle>
    children: ReactNode
}

export interface IButtonProps extends ITextProps {
    btnStyles?: StyleProp<ViewStyle>
    onPress: ((event: GestureResponderEvent) => void) | undefined
}
