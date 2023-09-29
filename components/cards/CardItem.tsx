import { FunctionComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import card_bg from '../../assets/bgs/background_transparent.png'
import { ICardProps } from '../../interface'
import { colors } from '../colors'
import { ScreenWidth } from '../shared'
import { RegularText, SmallText } from '../texts'

export const CardItem: FunctionComponent<ICardProps> = (props) => {
    const handlePress = () => {
        console.log('Press')
    }
    return (
        <CardBackground source={card_bg}>
            <CardTouchable
                underlayColor={colors.secondary}
                onPress={handlePress}
            >
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: colors.white }}>
                            ******{props.accountNumber.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText
                                textStyles={{
                                    marginBottom: 5,
                                    color: colors.grayLight,
                                }}
                            >
                                Total balance
                            </SmallText>
                            <RegularText
                                textStyles={{
                                    fontSize: 19,
                                    color: colors.white,
                                }}
                            >
                                {props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    )
}

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`

const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`
