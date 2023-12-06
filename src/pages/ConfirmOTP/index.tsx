import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Treat from '../../icons/svgs/Treat';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../navigation/NavigationService';
import LogoText from '../../icons/svgs/LogoText';
import { Header } from '../../components/models/Header';
import { CodeField } from 'react-native-confirmation-code-field';
let timer = () => { };
function ConfirmOTP() {

    const [value, setValue] = useState('')
    const [time, setTime] = useState(60)
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const onSubmitEdit = () => {

    }

    const startTimer = () => {
        timer = setTimeout(() => {
            if (time <= 0) {
                clearTimeout(timer);
                return false;
            }
            setTime(time - 1);
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timer);
    });

    const start = () => {
        setTime(30);
        clearTimeout(timer);
        startTimer();
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container} >
            <Header line />
            <Text style={styles.confirmOTPText} >Confirm OTP</Text>
            <Text style={styles.dataText} >We have send you Code please check your email or phone then add the send code</Text>

            <Text style={styles.code} >Code</Text>

            <CodeField
                cellCount={4}
                value={value}
                returnKeyType="done"
                onChangeText={setValue}
                onSubmitEditing={() => onSubmitEdit()}
                blurOnSubmit
                rootStyle={styles.root}
                textContentType="oneTimeCode"
                keyboardType="number-pad"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        key={index}
                        style={[styles.cell, success && styles.success, errorMsg ? styles.error : {}]}>

                        <Text style={[styles.cellText, success && styles.successText, errorMsg ? styles.errorText : {}]}>{
                            !symbol ? "-" : symbol}</Text>

                    </View>
                )}
            />
            <Text style={styles.expires} >Expires in
                <Text style={styles.time} > {time}s</Text></Text>
            <TouchableOpacity
                style={{ opacity: time == 0 ? 1 : 0.5 }}
                onPress={() => setTime(60)}
                disabled={time != 0}
            >
                <Text style={styles.resendText} >Resend code</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => NavigationService.reset('CustomerTabs')}
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
            <TouchableOpacity
                onPress={() => NavigationService.goBack()}
                style={styles.backButton} >
                <Text style={styles.backText} >
                    BACK
                </Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export { ConfirmOTP };
