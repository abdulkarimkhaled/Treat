import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import Points from '../../icons/svgs/Points';
import { colors } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';
import { icons } from '../../icons/pngs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function AddCard(props: any) {
    const [Number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [cards, setCards] = useState([
        icons.ApplePay,
        icons.Mada,
        icons.MasterCard,
        icons.Visa
    ])
    const [selectedImage, setSelectedImage] = useState(-1)
    const [saveCard, setSaveCard] = useState(false)
    const renderCards = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => setSelectedImage(index)} >
                <Image resizeMode='stretch' source={item}
                    style={[styles.cardImage, selectedImage !== index && styles.selectedImage]} />
            </TouchableOpacity>
        )
    }

    return (
        <KeyboardAwareScrollView bounces={false} style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Add new card
                </Text>
            </View>
            <View style={styles.cardsContainer} >
                <Text style={styles.title} >
                    Payment methods available
                </Text>
                <FlatList
                    data={cards}
                    renderItem={renderCards}
                    horizontal
                    scrollEnabled={false}
                    style={{ width: calcWidth(338), marginTop: calcHeight(14) }}
                />
                <Text style={styles.titleCard} >
                    Card number
                </Text>
                <View style={styles.number} >
                    <TextInput
                        style={{ color: 'grey' }}
                        value={Number}
                        maxLength={16}
                        placeholder={'Enter card number'}
                        onChangeText={(text) => setNumber(text)}
                        keyboardType={'number-pad'}
                        contextMenuHidden={true}
                        caretHidden={true}
                        autoCorrect={false}
                        autoComplete='off'
                        placeholderTextColor={'grey'}
                    />
                </View>
                <View style={styles.lowerInput} >
                    <View  >
                        <Text style={styles.titleCard}>Expiry date</Text>
                        <View style={styles.date} >
                            <TextInput
                                value={date}
                                style={{ color: 'grey' }}
                                maxLength={5}
                                placeholder={'Enter expiry date'}
                                onChangeText={(text) => setDate(text)}
                                keyboardType={'number-pad'}
                                contextMenuHidden={true}
                                caretHidden={true}
                                autoCorrect={false}
                                autoComplete='off'
                                placeholderTextColor={'grey'}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: calcWidth(23) }}>
                        <Text style={styles.titleCard}>CVV</Text>
                        <View style={styles.cvv} >
                            <TextInput
                                value={cvv}
                                maxLength={4}
                                placeholder={'CVV'}
                                style={{ color: 'grey' }}
                                onChangeText={(text) => setCvv(text)}
                                keyboardType={'number-pad'}
                                contextMenuHidden={true}
                                caretHidden={true}
                                autoCorrect={false}
                                autoComplete='off'
                                placeholderTextColor={'grey'}
                            />
                        </View>

                    </View>
                </View>
                <TouchableOpacity onPress={() => setSaveCard(!saveCard)} style={styles.saveCard} >
                    <View style={[styles.saveCardNotSelected, saveCard && styles.saveCardSelected]} />
                    <Text style={styles.saveCardText} >
                        Save card
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => NavigationService.goBack()}
                style={styles.addServiceButton} >
                <LinearGradient
                    useAngle={true}
                    angle={-266}
                    style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                    <Text style={styles.addServiceText} >
                        CONFIRM
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export { AddCard };
