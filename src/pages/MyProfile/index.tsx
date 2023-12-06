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

function MyProfile(props: any) {

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
            <ProfileImage style={styles.profileImageSvg} />
            <Text style={styles.galleryText} >
                Gallery
            </Text>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    style={styles.fakeList}
                    renderItem={renderView}
                    ItemSeparatorComponent={() => <View style={{ height: calcWidth(5) }} />}
                    numColumns={4}
                />
                <TouchableOpacity style={styles.cameraButton} >
                    <Camera />
                </TouchableOpacity>
            </TouchableOpacity>
            <ProfileInput
                value={centerName}
                onChange={setCenterName}
                placeholder={'Center name here'}
                icon={<User />}
                title='Center Name'
            />
            <ProfileInput
                value={about}
                onChange={setAbout}
                title='About'
                style={styles.about}
                multi
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
            <View>
                <TouchableOpacity onPress={() => NavigationService.navigate('Location')} style={styles.fakeButton} />
                <ProfileInput
                    value={location}
                    onChange={setLocation}
                    placeholder={'Location here'}
                    icon={<MapPin />}
                    title='Location'
                    enabled={false}
                />
            </View>
            <Text style={styles.workingHoursText} >{'Working Hours'}</Text>
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setMode('time')
                        setOpen(true)
                    }}
                    style={styles.dateButton} >
                    <Text style={styles.dateText} >
                        {moment(time).format('hh:mma')}
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.addnewTimeText} >+ Add new time</Text>
            <ProfileInput
                value={employeName}
                onChange={setEmployeName}
                placeholder={'Name Here'}
                icon={<User />}
                title='Employee Name'
            />
            <Text style={styles.addnewTimeText} >+ Add new Employee</Text>


            <View style={styles.switchContainer} >
                <Text>
                    Do you want to close the salon now?
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#AFAFAF' }}
                    thumbColor={closedQuestion ? '#5ec15d' : '#AFAFAF'}
                    ios_backgroundColor="white"
                    onValueChange={toggleSwitch}
                    value={closedQuestion} />
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

export { MyProfile };
