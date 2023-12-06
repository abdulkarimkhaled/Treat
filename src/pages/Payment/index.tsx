import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { calcHeight, calcWidth } from '../../config/metrics';
import DashedLine from 'react-native-dashed-line';
import DownIcon from '../../icons/svgs/DownIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { MasterCard, Visa } from '../../icons/svgs';
import Plus from '../../icons/svgs/Plus';
import { BookSuccessModal } from '../../components/models/BookSuccess';
function Payment(props: any) {

    const [cards, setcards] = useState([
        { type: 'mastercard', title: 'Mastercard ending with 4312' },
        { type: 'visa', title: 'Visa ending with 5698' }
    ])
    const [cvv, setCvv] = useState('')
    const [selected, setSelected] = useState(0)

    const [bookSuccessVisible, setBookSuccessVisible] = useState(false)
    const renderCards = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => {
                setSelected(index)
                setCvv('')
            }} style={[styles.card, selected == index && styles.selectedCard]} >
                {selected == index ? <View style={styles.selected} /> : <View style={styles.Notselected} />}
                {item.type == 'visa' ? <Visa /> : <MasterCard />}
                <Text style={styles.cardTitle} >{item.title}</Text>
                {selected == index ?
                    <View style={styles.inputContainer} >
                        <TextInput
                            style={styles.cvvInput}
                            value={cvv}
                            maxLength={4}
                            placeholder={'CVV'}
                            onChangeText={(text) => setCvv(text)}
                            keyboardType={'number-pad'}
                            contextMenuHidden={true}
                            caretHidden={true}
                            autoCorrect={false}
                            placeholderTextColor={'grey'}
                            autoComplete='off'
                        />
                    </View>
                    : <View style={{ height: calcHeight(28) }} />}
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Payment
                </Text>
            </View>
            <KeyboardAwareScrollView
                contentContainerStyle={{ paddingBottom: calcHeight(70) }}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    marginHorizontal: calcWidth(30), marginTop: calcHeight(40)
                }} >
                    <View style={styles.two} >
                        <Text style={styles.oneText}>1</Text>
                    </View>
                    <Text style={[styles.review, { color: '#AFAFAF' }]} >Review</Text>
                    <View style={{ padding: '5%', height: '100%', width: calcWidth(165) }}>
                        <DashedLine
                            dashThickness={calcHeight(1)}
                            dashColor='#A4ADA8'
                            dashGap={11}
                            dashLength={calcWidth(9)} />
                    </View>

                    <View style={styles.one} >
                        <Text style={styles.oneText}>2</Text>
                    </View>
                    <Text style={styles.review}>Payment</Text>
                </View>

                <Text style={styles.title}>Choose payment method</Text>
                <Text style={styles.subTitle}>You can pay with VISA - Mastercard - Mada</Text>
                <Text style={styles.paymentTitle}>Payment</Text>
                <FlatList
                    data={cards}
                    renderItem={renderCards}
                    style={styles.cardsList}
                />
                <TouchableOpacity onPress={() => NavigationService.navigate('AddCard')} style={{ marginLeft: calcWidth(30), marginTop: calcHeight(6), flexDirection: 'row', alignItems: "center" }} >
                    <Plus style={{ transform: [{ rotate: '0deg' }] }} />
                    <Text style={styles.addCard} >
                        Add new card
                    </Text>
                </TouchableOpacity>

                <View style={styles.paymentContainer} >
                    <View style={styles.paymentHeader}>
                        <Text style={styles.payment} >Haricut</Text>
                    </View>
                    <View style={styles.paymentSection} >
                        <Text style={styles.firstSection} >
                            Lorem ipsum
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 50
                        </Text>
                    </View>
                    <View style={styles.paymentSection} >
                        <Text style={styles.firstSection} >
                            Extra Person/s
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 50
                        </Text>
                    </View>

                    <DashedLine style={{ width: calcWidth(310), alignSelf: 'center' }} dashColor='#495B5133' dashLength={calcWidth(9)} dashGap={calcWidth(6)} />
                    <View style={[styles.paymentSection, { marginTop: calcHeight(10) }]} >
                        <Text style={styles.firstSection} >
                            Discount Code
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 0.0
                        </Text>
                    </View>
                    <View style={[styles.paymentSection]} >
                        <Text style={styles.firstSection} >
                            Discount Code
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 0.0
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center' }} >
                        <View style={styles.firstBall2} />
                        <View style={styles.secondBall2} />
                        <DashedLine style={{ width: calcWidth(310), alignSelf: 'center' }} dashColor='#495B5133' dashLength={calcWidth(9)} dashGap={calcWidth(6)} />
                    </View>
                    <View style={styles.totalSection} >
                        <Text style={styles.firstSection} >
                            Total
                        </Text>
                        <Text style={styles.secondSectionTotal}>
                            SR 50
                        </Text>
                    </View>

                </View>
                <TouchableOpacity
                    onPress={() => {
                        setBookSuccessVisible(true)
                    }}
                    style={styles.addServiceButton} >
                    <LinearGradient
                        useAngle={true}
                        angle={-266}
                        style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                        <Text style={styles.addServiceText} >
                            SUBMIT
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
            <BookSuccessModal
                visible={bookSuccessVisible}
                setVisible={setBookSuccessVisible}
            />
        </View>
    );
}

export { Payment };
