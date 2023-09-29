import { StatusBar } from 'expo-status-bar'
import { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import logo1 from '../assets/cards/mc.png'
import logo2 from '../assets/cards/visa_white.png'
import { CardSection } from '../components/cards'
import { colors } from '../components/colors'
import { Container } from '../components/shared'

export const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark"></StatusBar>
            <CardSection data={CARD_DATA} />
        </HomeContainer>
    )
}

const HomeContainer = styled(Container)`
    background-color: ${colors.grayLight};
    width: 100%;
    flex: 1;
`

const CARD_DATA = [
    {
        id: 1,
        accountNumber: '5037837219',
        balance: '200000.01',
        alias: 'Work Debit',
        logo: logo1,
    },
    {
        id: 2,
        accountNumber: '2649754205',
        balance: ' 67410.567',
        alias: 'Card 2',
        logo: logo2,
    },
    {
        id: 3,
        accountNumber: '3303060526',
        balance: '43719.25',
        alias: 'Card 3',
        logo: logo1,
    },
]
