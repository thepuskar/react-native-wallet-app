import { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { IProfileProps } from '../../interface'

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`
const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`

export const Profile: FunctionComponent<IProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img} />
        </StyledView>
    )
}
