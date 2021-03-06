import React, { useState, useEffect } from 'react';
import {View, Image, Text, TouchableOpacity}from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import styles from "./styles";

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import classesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api';

function Landing(){

    const {navigate} = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response => {
            const {total} = response.data
            setTotalConnections(total)
        })
    },[]);

    function handleNavigationToGiveClassesPages()
    {
        navigate('GiveClasses');
    }

    function handleNavigationToStudyPages()
    {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImage}/>

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonContainer}>
                <RectButton onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>

                <RectButton onPress={handleNavigationToGiveClassesPages} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={classesIcon}/>
                    <Text style={styles.buttonText}>
                        Dar Aulas
                    </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>

        </View>);
}

export default Landing;