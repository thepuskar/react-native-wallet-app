import { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { ICardSectionProps } from '../../interface'
import { CardItem } from './CardItem'

export const CardSection: FunctionComponent<ICardSectionProps> = (props) => {
    return (
        <CardList
            data={props.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: 'center',
            }}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <CardItem {...item} />}
        />
    )
}

const CardList = styled.FlatList`
    width: 100%;
    flex: 1;
    padding-left: 25px;
    padding-bottom: 15px;
`
