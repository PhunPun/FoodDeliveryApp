import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AuthTabs from './AuthTabs'
import { Icon } from 'react-native-elements'
import { colors } from '../global/style'
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'
import DrawerContent from '../components/DrawerContent'
const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: '#ffffff', // Màu nền của Drawer
                width: '75%', // Tùy chỉnh chiều rộng của Drawer
                padding: 0, // Loại bỏ padding nếu có
            },
            drawerContentContainerStyle: {
                margin: 0, // Loại bỏ margin
            },
            
            
        }}
        drawerContent={props => <DrawerContent {...props}/>}
        >
            <Drawer.Screen
                name='AuthTabs'
                component={AuthTabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            type='material-community'
                            name='home'
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='BusinessConsoleScreen'
                component={BusinessConsoleScreen}
                options={{
                    title: 'Business console',
                    drawerIcon: ({focused, size}) => (
                        <Icon
                            type='material'
                            name='business'
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}