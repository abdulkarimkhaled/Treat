import React, { useState } from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { ProfileInput } from '../../components/organisms/ProfileInput';
import User from '../../icons/svgs/User';
import Phone from '../../icons/svgs/Phone';
import { calcHeight, calcWidth } from '../../config/metrics';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GiftSuccessModal } from '../../components/models/GiftSuccess';

function SendGift(props: any) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [addSenderName, setAddSenderName] = useState(false)
    const toggleSwitch = () => setAddSenderName(previousState => !previousState);
    const [giftModal, setGiftModal] = useState(false)

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: calcHeight(60) }} bounces={false} style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Send a Gift
                </Text>
            </View>
            <ProfileInput
                value={name}
                onChange={setName}
                placeholder={'Receiver Name here'}
                icon={<User />}
                title='Receiver Name'
            />

            <ProfileInput
                value={phone}
                onChange={setPhone}
                placeholder={'Receiver Phone Number here'}
                icon={<Phone />}
                title='Receiver Phone Number'
            />
            <Text style={styles.noti} >
                The recipient will be contacted by a message on this number
            </Text>

            <ProfileInput
                value={message}
                onChange={setMessage}
                title='Message'
                multi
                style={styles.messageInput}
            />

            <View style={styles.payWalletContainer} >
                <Text style={styles.payWalletText} >
                    Do you want to add a sender's name?
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#FFFFFF' }}
                    thumbColor={addSenderName ? '#5EAF82' : '#AFAFAF'}
                    ios_backgroundColor="white"
                    onValueChange={toggleSwitch}
                    style={{ borderWidth: 1, borderColor: addSenderName ? '#5EAF82' : '#AFAFAF' }}
                    value={addSenderName} />
            </View>

            <Text style={styles.selectedServiceTitle} >
                Selected Services
            </Text>

            <View
                style={styles.singleServiceContainer} >
                <Image style={styles.seriveImage} source={{ uri: 'https://picsum.photos/200/300' }} />
                <View style={{ width: calcWidth(160) }} >
                    <Text style={styles.singleTitle} >{'Lorem ipsum'}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={styles.price} >SR {50}</Text>
                        <View style={styles.greyDot} />
                        <Text style={styles.timeMin}>{45}min</Text>
                    </View>
                    <Text style={styles.details} >{"industry's standard dummy ever since the an unknown .."}</Text>
                </View>
                <View />
            </View>

            <View style={styles.bottomContainer} >
                <View>
                    <Text style={styles.total} >
                        Total <Text style={styles.totalServices} >
                            (1)
                        </Text>
                    </Text>
                    <Text style={styles.totalPrice} >
                        SR {50}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setGiftModal(true)
                }} >
                    <LinearGradient angle={-266}
                        style={styles.gradientBookNow} colors={['#607569', '#4A5A51']}>
                        {/* <Gift /> */}
                        <Text style={styles.bookNow} >SEND</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <GiftSuccessModal
                setVisible={setGiftModal}
                visible={giftModal}
            />
        </KeyboardAwareScrollView >
    );
}

export { SendGift };
