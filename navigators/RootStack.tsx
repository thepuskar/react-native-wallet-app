import { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Welcome } from '../screens'
import { colors } from '../components/colors'
import { Greeting, Profile } from '../components/header'
import avatar from '../assets/avi/avatar.png'

export type RootStackParamList = {
    Welcome: undefined
    Home: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.grayLight,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight: 25,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 25,
                    },
                    headerRight: () => (
                        <Profile
                            img={avatar}
                            imgContainerStyle={{
                                backgroundColor: colors.tertiary,
                            }}
                        ></Profile>
                    ),
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: (props) => (
                            <Greeting
                                mainText="Hey Puskar!"
                                subText="Welcome back"
                                {...props}
                            />
                        ),
                        headerLeft: () => <></>,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
