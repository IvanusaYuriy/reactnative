import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FirstScreen from '../navigation/FirstScreen'
import SecondScreen from '../navigation/SecondScreen'
import ThirdScreen from '../navigation/ThirdScreen'
import Default from '../navigation/Default'
const AppNavigator = createBottomTabNavigator({
    First:{
        screen: FirstScreen,
        navigationOptions: {
            title: 'image-01'
            
        }
    },
    Second:{
        screen: SecondScreen,
        navigationOptions:{
            title: 'image-02'
        }
    },
    Third:{
        screen: ThirdScreen,
        navigationOptions:{
            title: 'image-03'
        }
    },
    Defaul:{
        screen: Default,
        navigationOptions:{
            title: 'image id'
        }
    }
},
    {
        initialRouteName: 'Defaul'
    
})

export default createAppContainer(AppNavigator)