import { Ionicons } from '@expo/vector-icons'
import { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { ITransactionAvatarProps } from '../../interface'
import { colors } from '../colors'

export const TransasctionAvatar: FunctionComponent<ITransactionAvatarProps> = (
    props
) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} color={colors.white} />
        </StyledView>
    )
}

const StyledView = styled.View`
    height: 45px;
    width: 45%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`
