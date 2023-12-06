{/* 
    Login screen allows user to login
*/}
import React, { useEffect, useState } from 'react';
import { Controller, useForm, UseFormSetValue } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';
import Treat from '../../icons/svgs/Treat';
import { ProfileInput } from '../../components/organisms/ProfileInput';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { calcHeight, calcWidth } from '../../config/metrics';
import Check from '../../icons/svgs/Check';
import Email from '../../icons/svgs/Email';
import { usePostLoginMutation } from '../../apis/authAPIs';
import { useDispatch } from 'react-redux';
import Types from '../../redux/types';

function Login() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [postLogin, loginResults] = usePostLoginMutation()
    const dispatch = useDispatch()

    const {
        control,
        handleSubmit,
        setValue
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit = (fields: {
        email: string
        password: string
    }) => {
        let body =
        {
            "email": fields.email,
            "password": fields.password
        }
        postLogin(body)


        // if (fields.email == 'Customer' && fields.password == '123456') {
        //     NavigationService.navigate('ConfirmOTP')
        // } else if (fields.email == 'Provider' && fields.password == '123456') {
        //     NavigationService.reset('MyTabs')
        // }
    }

    useEffect(() => {
        if (__DEV__) {
            setValue('email', 'branch@treat.com')
            setValue('password', '123456789')
            setToggleCheckBox(true)
        }
    }, [])

    useEffect(() => {
        if (loginResults.isSuccess) {
            NavigationService.reset("MyTabs")
            dispatch({
                type: Types.SAVE_LOGIN,
                payload: loginResults.data
            })
        }
    }, [loginResults])


    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container} >
            <Treat style={{ alignSelf: 'center' }} />
            <Controller
                control={control}
                rules={{
                    required: true,
                    minLength: 4
                }}
                render={({ field: { onChange, value } }) => (
                    <ProfileInput
                        value={value}
                        onChange={onChange}
                        placeholder={'Email here'}
                        icon={<Email />}
                        title='Email'
                        keyboardType='email-address'
                    />
                )}
                name="email"
            />

            <Controller
                control={control}
                rules={{
                    minLength: 6,
                }}
                render={({ field: { onChange, value } }) => (

                    <ProfileInput
                        value={value}
                        onChange={onChange}
                        placeholder={'Password here'}
                        icon={<Email />}
                        title='Password'
                    // type='phone'
                    />
                )}
                name="password"
            />
            <View style={{
                flexDirection: 'row',
                marginTop: calcHeight(21),
                marginHorizontal: calcWidth(40),
                alignItems: 'center'
            }} >
                <TouchableOpacity
                    onPress={() => setToggleCheckBox(!toggleCheckBox)}
                    style={{
                        width: calcWidth(20),
                        height: calcWidth(20),
                        borderWidth: 1,
                        borderColor: '#5EAF82',
                        backgroundColor: !toggleCheckBox ? '#F6F6F6' : '#5EAF82',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderRadius: calcWidth(5),
                        marginRight: calcWidth(10)
                    }} >
                    <Check />
                </TouchableOpacity>
                <Text style={styles.readText} >
                    I Have Read and Accept the <Text style={styles.bold} >
                        Agreement
                    </Text>
                </Text>
            </View>
            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                disabled={!toggleCheckBox}
                // onPress={() => NavigationService.navigate('CustomerTabs')}
                // onPress={() => NavigationService.reset('MyTabs')}

                style={styles.addServiceButton} >
                <LinearGradient
                    useAngle={true}
                    angle={-266}
                    style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                    <Text style={styles.addServiceText} >
                        Login
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export { Login };
