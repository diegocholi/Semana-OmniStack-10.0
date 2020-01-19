import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Importando páginas de navegação
import Main from './pages/Main'
import Profile from './pages/Profile'

/**
 * Criar as rotas em uma constante passando as páginas de navegação.
 * Podem ser setadas configurações em cada rota criada, transformando a rota que é passada no método createStackNavigator 
 * em um objeto.
 * O segundo parametro passado no método, defaultNavigationOptions são as configurações default das rotas.
 */
const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil Github'
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTitleAlign: 'center', 
            headerTintColor: '#FFF',
            headerStyle:{
                backgroundColor: '#7D40E7'
            } 
        }
    }
    )
)

export default Routes
