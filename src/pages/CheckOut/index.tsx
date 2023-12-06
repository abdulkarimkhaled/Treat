import React, { useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { calcHeight, calcWidth } from '../../config/metrics';
import DashedLine from 'react-native-dashed-line';
import DownIcon from '../../icons/svgs/DownIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
function CheckOut(props: any) {
    const [coupon, setCoupon] = useState('')
    const toggleSwitch = () => setWalletPay(previousState => !previousState);
    const [walletPay, setWalletPay] = useState(false)
    return (
        <View
            style={styles.container}>
            <Header line pinBool filterBool bellBool />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Booking Checkout
                </Text>
            </View>

            <View style={{
                flexDirection: 'row', alignItems: 'center',
                marginHorizontal: calcWidth(30), marginTop: calcHeight(40)
            }} >
                <View style={styles.one} >
                    <Text style={styles.oneText}>1</Text>
                </View>
                <Text style={styles.review} >Review</Text>
                <View style={{ padding: '5%', height: '100%', width: calcWidth(165) }}>
                    <DashedLine
                        dashThickness={calcHeight(1)}
                        dashColor='#A4ADA8'
                        dashGap={11}
                        dashLength={calcWidth(9)} />
                </View>

                <View style={styles.two} >
                    <Text style={styles.oneText}>2</Text>
                </View>
                <Text style={[styles.review, { color: '#AFAFAF' }]}>Payment</Text>
            </View>
            <KeyboardAwareScrollView
                contentContainerStyle={{ paddingBottom: calcHeight(70) }}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <View style={styles.couponContainer} >
                    <View style={styles.inputBack} >
                        <TextInput
                            value={coupon}
                            onChangeText={(text) => { setCoupon(text) }}
                            style={styles.input}
                            placeholder='Enter code here'
                            placeholderTextColor={'#777777'}
                        />
                        <TouchableOpacity style={styles.couponButton} >
                            <Text style={styles.couponButtonText} >
                                APPLY COUPON
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.firstBall} />
                    <View style={styles.secondBall} />
                </View>

                <View style={styles.bookingContainer} >
                    <View style={styles.bookingHeader}>
                        <Text style={styles.booking} >Booking</Text>
                        <DownIcon color={'#B2866B'} />
                    </View>
                    <View style={styles.secondBookingHeader} >
                        <Text style={styles.services} >Services</Text>
                        <Text style={styles.start}>Start Time</Text>
                        <Text style={styles.total} >Total</Text>
                    </View>
                    <View style={styles.thirdBookingHeader}>
                        <Text style={styles.serviceInfo} >Massage</Text>
                        <Text style={styles.dateDetails}>{'9:30PM\n10/12/2023'}</Text>
                        <Text style={styles.totalPrice}>50,00 sar</Text>
                    </View>
                </View>
                <View style={styles.payWalletContainer} >
                    <Text style={styles.payWalletText} >
                        Do you want to pay with your Wallet?
                    </Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#AFAFAF' }}
                        thumbColor={walletPay ? '#5ec15d' : '#AFAFAF'}
                        ios_backgroundColor="white"
                        onValueChange={toggleSwitch}
                        value={walletPay} />
                </View>

                <View style={styles.paymentContainer} >
                    <View style={styles.paymentHeader}>
                        <Text style={styles.payment} >Payment</Text>
                        <DownIcon color={'#B2866B'} />
                    </View>
                    <View style={styles.paymentSection} >
                        <Text style={styles.firstSection} >
                            Sub Total
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 50
                        </Text>
                    </View>
                    <View style={styles.paymentSection} >
                        <Text style={styles.firstSection} >
                            VAT
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 0.0
                        </Text>
                    </View>
                    <View style={styles.paymentSection} >
                        <Text style={styles.firstSection} >
                            Discount
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 0.0
                        </Text>
                    </View>
                    <View style={styles.paymentSection} >
                        <Text style={styles.firstSection} >
                            Discount Code
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 0.0
                        </Text>
                    </View>
                    <DashedLine dashColor='#495B5133' dashLength={calcWidth(9)} dashGap={calcWidth(6)} />
                    <View style={[styles.paymentSection, { marginTop: calcHeight(10) }]} >
                        <Text style={styles.firstSection} >
                            Discount Code
                        </Text>
                        <Text style={styles.secondSection}>
                            SR 0.0
                        </Text>
                    </View>
                    <DashedLine dashColor='#495B5133' dashLength={calcWidth(9)} dashGap={calcWidth(6)} />
                    <View style={styles.totalSection} >
                        <Text style={styles.firstSection} >
                            Total
                        </Text>
                        <Text style={styles.secondSectionTotal}>
                            SR 50
                        </Text>
                    </View>
                    <View style={styles.firstBall2} />
                    <View style={styles.secondBall2} />
                </View>
                <TouchableOpacity
                    onPress={() => NavigationService.navigate('Payment')}
                    style={styles.addServiceButton} >
                    <LinearGradient
                        useAngle={true}
                        angle={-266}
                        style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                        <Text style={styles.addServiceText} >
                            PAY NOW
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    );
}

export { CheckOut };
