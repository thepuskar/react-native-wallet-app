import { FunctionComponent } from 'react'
import { IGreetingProps } from '../../interface'
import styled from 'styled-components/native'
import { RegularText, SmallText } from '../texts'
import { colors } from '../colors'

const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`

export const Greeting: FunctionComponent<IGreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText
                textStyles={[
                    { color: colors.secondary, fontSize: 22 },
                    props.mainTextStyles,
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[{ color: colors.grayDark }, props.subTextStyles]}
            >
                {props.subText}
            </SmallText>
        </StyledView>
    )
}
