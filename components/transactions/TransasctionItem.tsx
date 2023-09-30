import { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { ITransactionProps } from '../../interface'
import { TransasctionAvatar } from './TransasctionAvatar'
import { RegularText, SmallText } from '../texts'
import { colors } from '../colors'

export const TransasctionItem: FunctionComponent<ITransactionProps> = (
    props
) => {
    console.log(`Transactions`, props)
    return (
        <TransasctionRow>
            <LeftView>
                <TransasctionAvatar {...props.art} />
                <View style={{ marginLeft: 10 }}>
                    <RegularText
                        textStyles={{
                            color: colors.secondary,
                            textAlign: 'left',
                            marginBottom: 5,
                        }}
                    >
                        {props.title}
                    </RegularText>
                    <SmallText
                        textStyles={{
                            textAlign: 'left',
                            color: colors.grayDark,
                        }}
                    >
                        {props.subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: 'right',
                        marginBottom: 5,
                    }}
                >
                    {props.amount}
                </RegularText>
                <SmallText
                    textStyles={{
                        textAlign: 'right',
                        color: colors.grayDark,
                    }}
                >
                    {props.date}
                </SmallText>
            </RightView>
        </TransasctionRow>
    )
}
const TransasctionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 2;
`

const RightView = styled.View`
    flex: 1;
`
