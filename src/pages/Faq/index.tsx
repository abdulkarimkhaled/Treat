import React, { useEffect } from 'react';
import { Platform, Text, TouchableOpacity, UIManager, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { AccordionList } from 'react-native-accordion-list-view';
import Points from '../../icons/svgs/Points';
import DownIcon from '../../icons/svgs/DownIcon';

function Faq(props: any) {
    const data = [
        {
            id: 0,
            title: 'What is Lorem Ipsum?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
        },
        {
            id: 1,
            title: 'What is Lorem Ipsum?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
        },
        {
            id: 2,
            title: 'What is Lorem Ipsum?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
        },
        {
            id: 3,
            title: 'What is Lorem Ipsum?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
        },
        {
            id: 4,
            title: 'What is Lorem Ipsum?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
        },
        {
            id: 5,
            title: 'What is Lorem Ipsum?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
        },
    ];
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    FAQ
                </Text>
            </View>

            <AccordionList
                data={data}
                customTitle={item => <Text style={styles.title} >{item.title}</Text>}
                customBody={item => <Text style={styles.body} >{item.body}</Text>}
                animationDuration={400}
                expandMultiple={true}
                style={styles.accord}
                customIcon={() => <DownIcon color={'#AFAFAF'} style={styles.icon} />}

            />

        </View>
    );
}

export { Faq };
