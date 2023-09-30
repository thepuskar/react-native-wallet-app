import { colors } from '../components/colors'

export const TRANSACTION_DATA = [
    {
        id: 1,
        title: 'Taxi',
        subtitle: 'Uber car',
        amount: '100.00',
        date: '14 Aug 2021',
        art: {
            icon: 'car',
            background: colors.primary,
        },
    },
    {
        id: 2,
        title: 'Shopping',
        subtitle: 'Ali Express',
        amount: '50.25',
        date: '15 Aug 2021',
        art: {
            icon: 'cart',
            background: colors.tertiary,
        },
    },
    {
        id: 3,
        title: 'Travel',
        subtitle: 'Emirates',
        amount: '$ 75.75',
        date: '16 Aug 2021',
        art: {
            icon: 'airplane',
            background: colors.accent,
        },
    },
]
