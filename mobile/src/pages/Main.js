import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
import api from '../service/api'
import { region } from 'expo-localization'

function Main({ navigation }){
    const [curretRegion, setCurretRegion] = useState(null)
    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadInitialPosition(){
            // Requerindo permissão do usuário para localização
            const { granted } = await  requestPermissionsAsync();
            
            // Verificando se o usuário deu a permissão de acesso a sua localização
            if(granted){
                // Extraindo as coordenadas do usuáio
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })
                
                // Extrainto a latitude e a longitude das coordenadas extraidas
                const { latitude, longitude } = coords

                // Setando a posição inicial. Os parametros latitudeDelta e longitudeDelta é o zoom do mapa
                setCurretRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }
        loadInitialPosition()
    }, [])

    async function loadDevs(){
        const { latitude, longitude } = curretRegion

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs: 'ReactJS'
            }
        })

        setDevs(response.data)
    }

    function hangleRegionChange(region){
        console.log(region)
        setCurretRegion(region)
    }

    // Se a região não for iniciada não mostrará nada na tela
    if (!curretRegion) {
        return null
    }

    return (
        <>
            <MapView 
                onRegionChangeComplete={ hangleRegionChange } 
                initialRegion={ curretRegion } 
                style={ style.map }>
                {/* Marker é uma marcação no mapa */}
                {devs.map(dev => (
                        <Marker 
                        key={ dev._id }
                            coordinate={{ 
                                latitude: dev.location.coordinates[1], 
                                longitude:dev.location.coordinates[0] 
                                }}>
                        <Image 
                            style={ style.avatar } 
                            source={{uri: dev.avatar_url}}/>
                        {/* 
                        Callout é a informação que carregará quando clicado no avatar do mapa.
                        onPress é parecido com onClick na WEB varios componentes podem ter o comportamento onPress.
                        */}
                        <Callout onPress={ () => {
                            navigation.navigate('Profile', {
                                github_username: dev.github_username
                            })
                        }}>
                            <View style={ style.callout }>
                                <Text style={ style.devName } > { dev.login } </Text>
                                <Text style={ style.devBio }> { dev.github_username } </Text>
                                <Text style={ style.devTechs }> { dev.techs.join(', ') } </Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
                <Marker 
                    coordinate={{ 
                        latitude:-25.4193543, 
                        longitude:-49.3518322 
                        }}>
                    <Image style={ style.avatar } source={{uri: 'https://avatars0.githubusercontent.com/u/48794883?s=460&v=4'}}/>
                    {/* 
                    Callout é a informação que carregará quando clicado no avatar do mapa.
                    onPress é parecido com onClick na WEB varios componentes podem ter o comportamento onPress.
                    */}
                    <Callout onPress={ () => {
                        navigation.navigate('Profile', {
                            github_username: 'diegocholi'
                        })
                    }}>
                        <View style={ style.callout }>
                            <Text style={ style.devName } >Diego Choli</Text>
                            <Text style={ style.devBio }>Biografia programador ... </Text>
                            <Text style={ style.devTecs }> ReactJS, ReactNative, NodeJS </Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={ style.searchForm }>
                <TextInput 
                    style={style.searchInput } 
                    placeholder='Buscar devs por techs..'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={ false }
                />
                <TouchableOpacity onPress={ loadDevs } style={ style.loadButton }>
                    <Text>
                        <MaterialIcons name='my-location' size={20} color='#FFF' />
                    </Text>    
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },
    devTechs: {
        marginTop: 5
    },
    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
})

export default Main
