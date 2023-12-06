import React, { ReactElement, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Header } from '../../components/models/Header';
import { calcHeight, calcWidth } from '../../config/metrics';
import styles from './styles';
import Edit from '../../icons/svgs/Edit';
import Customers from '../../icons/svgs/Customers';
import Delete from '../../icons/svgs/Delete';
import { MultiSelect } from 'react-native-element-dropdown';
import Back from '../../icons/svgs/Back';
import Plus from '../../icons/svgs/Plus';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../navigation/NavigationService';

type week = Array<{
    dayName: string
    fullDayName: string
    selected: boolean
    periods: Array<{
        from: string,
        to: string,
        employees: Array<string>
    }>
}>

type day = number

function Schedule(props: any) {
    const [currentDay, setCurrentDay] = useState<day>(0)
    const data = [
        { label: 'Name 1', value: '1' },
        { label: 'Name 2', value: '2' },
        { label: 'Name 3', value: '3' },
        { label: 'Name 4', value: '4' },
        { label: 'Name 5', value: '5' },
        { label: 'Name 6', value: '6' },
        { label: 'Name 7', value: '7' },
        { label: 'Name 8', value: '8' },
    ];
    const [selected, setSelected] = useState<string[]>([]);
    const [week, setWeek] = useState<week>([
        {
            dayName: 'SAT',
            fullDayName: 'SATURDAY',
            selected: false,
            periods: [
                {
                    from: '09.00AM',
                    to: '07.00PM',
                    employees: ['Name 1', 'Name 1', 'Name 1']
                },
                {
                    from: '09.00AM',
                    to: '07.00PM',
                    employees: ['Name 1', 'Name 1', 'Name 1']
                }
            ]
        },
        { dayName: 'SUN', fullDayName: 'SUNDAY', selected: true, periods: [] },
        { dayName: 'MON', fullDayName: 'MONDAY', selected: false, periods: [] },
        { dayName: 'TUE', fullDayName: 'TUESDAY', selected: true, periods: [] },
        { dayName: 'WED', fullDayName: 'WEDNESDAY', selected: false, periods: [] },
        { dayName: 'THU', fullDayName: 'THURSDAY', selected: false, periods: [] },
        { dayName: 'FRI', fullDayName: 'FRIDAY', selected: true, periods: [] },
    ])
    const isWeekSelected = (index: number) => {
        let tempWeek = [...week]
        tempWeek[index].selected = !tempWeek[index].selected
        setCurrentDay(index)
        setWeek(tempWeek)
    }
    const renderWeeks = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => isWeekSelected(index)}
                style={[styles.weekView, item.periods.length && styles.weekSelected]} >
                <Text style={[styles.weekText, item.periods.length && styles.weekTextSelected]} >{item.dayName}</Text>
            </TouchableOpacity>
        )
    }

    const renderDay = ({ item, index }: any) => {
        return (
            <View>
                <Text style={styles.periodTitle}>Period {index + 1}</Text>
                <View style={styles.fromToContainer} >
                    <Text style={styles.fromText} >
                        From
                    </Text>
                    <TouchableOpacity style={styles.fromButton} >
                        <Text>
                            {item.from}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.toText} >
                        To
                    </Text>
                    <TouchableOpacity style={styles.toButton} >
                        <Text>
                            {item.to}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editButton} >
                        <Edit />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Delete />
                    </TouchableOpacity>
                </View>
                <Text style={styles.periodTitle}>Employees</Text>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
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
            </View>
        )
    }


    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            bounces={false} contentContainerStyle={{ paddingBottom: calcHeight(60) }} style={styles.container}>
            <Header line />
            <View style={{
                marginTop: calcHeight(14)
            }} />
            <View style={styles.servicesContainer} >
                <View style={styles.serviceTextContainer} >
                    <View>
                        <Text style={styles.serviceName} >
                            {'Services name 1'}
                        </Text>
                        <Text style={styles.serviceType} >
                            {'Location SPA'}
                        </Text>
                    </View>
                    <Customers />
                </View>
                <TouchableOpacity style={styles.editButton} >
                    <Edit />
                </TouchableOpacity>
            </View>
            <Text style={styles.weekTitle} >Week</Text>
            <FlatList
                data={week}
                numColumns={7}
                scrollEnabled={false}
                style={styles.weekList}
                renderItem={renderWeeks}
            />
            <View style={styles.selectedDayContainer} >
                <Text style={styles.selectedDayText}>{week[currentDay].fullDayName}</Text>
            </View>
            <FlatList
                data={week[currentDay].periods}
                renderItem={renderDay}
                style={styles.periodsList}
                ListFooterComponent={() =>
                    <Text style={styles.addnewTimeText} >+ Add new period</Text>
                }
            />
            <TouchableOpacity
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

export { Schedule };
