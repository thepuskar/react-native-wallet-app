import { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import { Container } from '../components/shared'
import { colors } from '../components/colors'

import bgImg from '../assets/bgs/background_v1.png'
import { BigText, SmallText } from '../components/texts'
import { RegularButton } from '../components/buttons'

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: center;
`

export const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light"></StatusBar>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={bgImg} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best payment method, connecys your money to your
                        friends, family.
                    </SmallText>
                    <RegularButton onPress={() => {}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}
