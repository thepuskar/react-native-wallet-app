import { StatusBar } from 'expo-status-bar'
import { FunctionComponent } from 'react'
import styled from 'styled-components/native'

import { CardSection } from '../components/cards'
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import { TransactionSection } from '../components/transactions'
import { CARD_DATA } from '../data/card-data'
import { TRANSACTION_DATA } from '../data/transaction-data'

export const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark"></StatusBar>
            <CardSection data={CARD_DATA} />
            <TransactionSection data={TRANSACTION_DATA} />
        </HomeContainer>
    )
}

const HomeContainer = styled(Container)`
    background-color: ${colors.grayLight};
    width: 100%;
    flex: 1;
`
