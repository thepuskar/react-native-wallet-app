import { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import { StatusBar } from 'expo-status-bar'

const HomeContainer = styled(Container)`
    background-color: ${colors.grayLight};
    width: 100%;
    flex: 1;
`

export const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark"></StatusBar>
        </HomeContainer>
    )
}
