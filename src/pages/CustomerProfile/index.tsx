import React, { useState } from 'react';
import { FlatList, Switch, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import ProfileImage from '../../icons/svgs/ProfileImage';
import { calcWidth } from '../../config/metrics';
import Camera from '../../icons/svgs/Camera';
import { ProfileInput } from '../../components/organisms/ProfileInput';
import User from '../../icons/svgs/User';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Phone from '../../icons/svgs/Phone';
import Email from '../../icons/svgs/Email';
import MapPin from '../../icons/svgs/MapPin';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Calendar from '../../icons/svgs/Calendar';
import { Dropdown } from 'react-native-element-dropdown';
import DownIcon from '../../icons/svgs/DownIcon';

function CustomerProfile(props: any) {
    const [gender, setGender] = useState<string>('');
    const [isFocus, setIsFocus] = useState(false);
    const [centerName, setCenterName] = useState('')
    const [about, setAbout] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [employeName, setEmployeName] = useState('')
    const [closedQuestion, setClosedQuestion] = useState(false)
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState<'date' | 'time'>('date')
    const [open, setOpen] = useState(false)

    const toggleSwitch = () => setClosedQuestion(previousState => !previousState);
    const renderView = ({ item, index }: any) => {
        return (
            <View style={styles.extra} />
        )
    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={{
            paddingBottom: calcWidth(120)
        }} style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    My Profile
                </Text>
            </View>


            <ProfileInput
                value={centerName}
                onChange={setCenterName}
                placeholder={'Full name here'}
                icon={<User />}
                title='Full Name'
            />

            <ProfileInput
                value={phone}
                onChange={setPhone}
                placeholder={'Phone number here'}
                icon={<Phone />}
                title='Phone Number'
            />
            <ProfileInput
                value={email}
                onChange={setEmail}
                placeholder={'Email here'}
                icon={<Email />}
                title='E-mail'
            />
            <Text style={styles.workingHoursText} >{'Gender'}</Text>


            <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.dropdownContainer}
                data={[{ label: 'Male', value: '1' },
                { label: 'Female', value: '2' },]}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Gender' : '...'}
                value={gender}
                onChange={item => {
                    setGender(item.value);
                }}
                renderRightIcon={() => {
                    return (<View style={styles.iconContainer} >
                        <DownIcon />
                    </View>)
                }}
                renderItem={item => (
                    <View style={styles.item}>
                        <Text style={styles.selectedTextStyle}>{item.label}</Text>
                    </View>
                )}
            />

            <Text style={styles.workingHoursText} >{'Date of birth'}</Text>

            <View style={styles.dateTimeContainer} >
                <TouchableOpacity
                    onPress={() => {
                        setMode('date')
                        setOpen(true)
                    }}
                    style={styles.dateButton}  >
                    <Text style={styles.dateText} >
                        {moment(date).format('MM/DD/YY')}
                    </Text>
                    <View style={styles.iconContainer} >
                        <Calendar />
                    </View>
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
                        SAVE
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            <DatePicker
                modal
                mode={mode}
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </KeyboardAwareScrollView>
    );
}

export { CustomerProfile };
