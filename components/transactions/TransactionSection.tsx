import { Ionicons } from '@expo/vector-icons'
import { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { ITransactionProps, ITransactionSectionProps } from '../../interface'
import { colors } from '../colors'
import { RegularText, SmallText } from '../texts'
import { TransasctionItem } from './TransasctionItem'

export const TransactionSection: FunctionComponent<ITransactionSectionProps> = (
    props
) => {
    console.log('props.data', props.data)
    return (
        <TransasctionSectionBackground>
            <TransasctionRow style={{ marginBottom: 25 }}>
                <RegularText
                    textStyles={{ fontSize: 19, color: colors.secondary }}
                >
                    Transaction
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons
                        name="caret-down"
                        size={13}
                        color={colors.grayDark}
                    />
                </SmallText>
            </TransasctionRow>
            <TransasctionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor={({ id }: { id: number | string }) =>
                    id.toString()
                }
                renderItem={({ item }: { item: ITransactionProps }) => (
                    <TransasctionItem {...item} />
                )}
            />
        </TransasctionSectionBackground>
    )
}

const TransasctionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`

const TransasctionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const TransasctionList = styled.FlatList`
    width: 100%;
`
