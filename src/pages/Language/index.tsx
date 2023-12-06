import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { Header } from '../../components/models/Header';
import KSA from '../../icons/svgs/KSA';
import UK from '../../icons/svgs/UK';

function Language() {
    const [selected, setSelected] = useState('en')
    return (
        <View style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Language
                </Text>
            </View>
            <TouchableOpacity onPress={() => setSelected('en')} style={[styles.notSelectedContainer, selected == 'en' && styles.selected]} >
                <UK />
                <Text style={styles.langText} >English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected('ar')} style={[styles.notSelectedContainer, selected == 'ar' && styles.selected]}>
                <KSA />
                <Text style={styles.langText}>عربى</Text>
            </TouchableOpacity>
        </View>
    );
}

export { Language };
