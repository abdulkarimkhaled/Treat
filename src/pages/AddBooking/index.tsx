import React, { useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Back from '../../icons/svgs/Back';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import NavigationService from '../../navigation/NavigationService';
import { calcHeight, calcWidth } from '../../config/metrics';
import { fonts } from '../../config/appStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Plus from '../../icons/svgs/Plus';
import CalendarDays from '../../components/organisms/CalendarDays';
import moment from 'moment';

function AddBooking() {
    const [value, setValue] = useState<string>('');
    const [service, setService] = useState<string>('');
    const [selected, setSelected] = useState<string[]>([]);
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDateKey, setSelectedDateKey] = useState(0)
    const [selectedTime, setSelectedTime] = useState(0)
    const [isFocus, setIsFocus] = useState(false);
    const [time, setTime] = useState([
        '9.00 AM',
        '9.30 AM',
        '9.45 AM',
        '10.00 AM',
    ])
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const data = [
        { label: 'Hair Cut', value: '1' },
        { label: 'Hair Cut', value: '2' },
        { label: 'Hair Cut', value: '3' },
        { label: 'Hair Cut', value: '4' },
        { label: 'Hair Cut', value: '5' },
        { label: 'Hair Cut', value: '6' },
        { label: 'Hair Cut', value: '7' },
        { label: 'Hair Cut', value: '8' },
    ];

    const services = [
        { label: 'Service 1', value: '1' },
        { label: 'Service 2', value: '2' },
        { label: 'Service 3', value: '3' },
        { label: 'Service 4', value: '4' },
        { label: 'Service 5', value: '5' },
        { label: 'Service 6', value: '6' },
        { label: 'Service 7', value: '7' },
        { label: 'Service 8', value: '8' },
    ];

    const employees = [
        { label: 'Name 1', value: '1' },
        { label: 'Name 2', value: '2' },
        { label: 'Name 3', value: '3' },
        { label: 'Name 4', value: '4' },
        { label: 'Name 5', value: '5' },
        { label: 'Name 6', value: '6' },
        { label: 'Name 7', value: '7' },
        { label: 'Name 8', value: '8' },
    ];



    const changeSelectedDate = async (date: any, key: any) => {
        setSelectedDate(date)
        setSelectedDateKey(key)
    };



    const renderTimes = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedTime(index)}
                style={[styles.timeView, selectedTime == index && styles.timeSelected]} >
                <Text style={[styles.timeText, selectedTime == index && styles.timeTextSelected]} >{item}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{
            paddingBottom: calcHeight(100)
        }} style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Add New Booking
                </Text>
            </View>
            <Text style={styles.categoryHeaderText} >
                Category
            </Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#4A5A51' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.dropdownContainer}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Service' : '...'}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderItem={item => (
                    <View style={styles.item}>
                        <Text style={styles.selectedTextStyle}>{item.label}</Text>
                    </View>
                )}
            />
            <Text style={styles.categoryHeaderText} >
                Services
            </Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#4A5A51' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={services}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Service' : '...'}
                value={service}
                onChange={item => {
                    setService(item.value);
                }}
                renderItem={item => (
                    <View style={styles.item}>
                        <Text style={styles.selectedTextStyle}>{item.label}</Text>
                    </View>
                )}
            />
            <Text style={styles.periodTitle}>Employees</Text>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={employees}
                labelField="label"
                valueField="value"
                placeholder="Choose Employee"
                value={selected}
                inside
                onChange={item => {
                    setSelected(item);
                }}

                renderItem={item => (
                    <View style={styles.item}>
                        <Text style={styles.selectedTextStyle}>{item.label}</Text>
                    </View>
                )}
                renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity style={styles.selectedStyle} onPress={() => unSelect && unSelect(item)}>
                        <Text style={styles.textSelectedStyle}>{item.label}</Text>
                        <Plus />
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.dateText}>Date</Text>

            <Text style={styles.dateTitle}>
                {moment(selectedDate).format('MMMM YYYY')}
            </Text>

            <CalendarDays
                firstDate={
                    new Date().getHours() > 21 ?
                        new Date(currentMonth).setDate(new Date(currentMonth).getDate() + 1)
                        : new Date(currentMonth)
                }
                numberOfDays={35}
                disabledText={'closed'}
                width={calcWidth(375)}
                daysInView={6}
                selectedDateKey={selectedDateKey}
                onDateSelect={(date: any, key: any) => {
                    changeSelectedDate(date, key)
                }}
            />
            <Text style={styles.dateText}>Time</Text>
            <FlatList
                data={time}
                numColumns={4}
                style={styles.list}
                renderItem={renderTimes}
            />



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
        </KeyboardAwareScrollView>
    );
}

export { AddBooking };
