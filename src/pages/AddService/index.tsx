import React, { useEffect, useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Back from '../../icons/svgs/Back';
import { Dropdown } from 'react-native-element-dropdown';
import NavigationService from '../../navigation/NavigationService';
import { calcHeight, calcWidth } from '../../config/metrics';
import { fonts } from '../../config/appStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { useGetServicesCategoriesQuery } from '../../apis/generalAPIs';

function AddService() {
    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)
    const { data: categories } = useGetServicesCategoriesQuery(authToken)
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState<Array<{
        label: string
        value: string
    }>>([]);
    const [selectedType, setSelectedType] = useState(1)
    const [selectedGender, setSelectedGender] = useState(1)
    const [serviceNameEn, setServiceNameEn] = useState('')
    const [serviceNameAr, setServiceNameAr] = useState('')
    const [serviceTime, setServiceTime] = useState('')
    const [priceBefore, setPriceBefore] = useState('')
    const [priceAfter, setPriceAfter] = useState('')

    useEffect(() => {
        if (categories?.data) {
            let tempCat: {
                label: string;
                value: string;
            }[] = []
            for (let i = 0; i < categories?.data.length; i++) {
                tempCat.push({
                    label: categories?.data[i].name,
                    value: categories?.data[i].id
                })
            }
            setData(tempCat)
            setValue('')
        }
    }, [categories])

    const addServiceApi = () => {
        let body = {
            ar: {
                name: serviceNameAr
            },
            en: {
                name: serviceNameEn
            },
            service_category_id: value,
            regular_price: priceBefore,
            sale_price: priceAfter,
            estimated_time: serviceTime,
            target_client_gender: selectedGender
        }
        // updateService({ token: authToken, body })
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
                    Add New Service
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
                placeholder={!isFocus ? 'Select Service Category' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            <View style={styles.buttonsContainer} >
                <TouchableOpacity onPress={() => setSelectedType(1)} style={[styles.locationButton, selectedType == 1 && styles.selectedGenderButton]} >
                    <Text style={[styles.locationText, selectedType == 1 && styles.selectedGenderText]} >
                        LOCATION SPA
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedType(2)} style={[styles.homeButton, selectedType == 2 && styles.selectedGenderButton]}>
                    <Text style={[styles.homeText, selectedType == 2 && styles.selectedGenderText]}>
                        HOME SPA
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.buttonsContainer, { marginTop: calcHeight(37) }]} >
                <TouchableOpacity onPress={() => setSelectedGender(1)} style={[styles.genderButton, selectedGender == 1 && styles.selectedGenderButton]} >
                    <Text style={[styles.genderText, selectedGender == 1 && styles.selectedGenderText]} >
                        Male
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedGender(2)} style={[styles.genderButton, selectedGender == 2 && styles.selectedGenderButton]}>
                    <Text style={[styles.genderText, selectedGender == 2 && styles.selectedGenderText]}>
                        Female
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedGender(3)} style={[styles.genderButton, selectedGender == 3 && styles.selectedGenderButton]}>
                    <Text style={[styles.genderText, selectedGender == 3 && styles.selectedGenderText]}>
                        Couple
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                marginHorizontal: calcWidth(30),
                marginTop: calcHeight(30),
                justifyContent: 'space-between'
            }} >
                <View>
                    <Text style={{
                        fontFamily: fonts.RegularSans,
                        fontSize: calcWidth(14),
                        fontWeight: '400',
                        color: '#4A5A51',
                        marginLeft: calcWidth(10)
                    }} >
                        Service Name (EN)
                    </Text>
                    <TextInput
                        value={serviceNameEn}
                        onChangeText={(value) => setServiceNameEn(value)}
                        placeholder='Service name (En) here'
                        placeholderTextColor={'#777777'}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={{
                        fontFamily: fonts.RegularSans,
                        fontSize: calcWidth(14),
                        fontWeight: '400',
                        color: '#4A5A51',
                        marginLeft: calcWidth(10)
                    }} >
                        Service Name (AR)
                    </Text>
                    <TextInput
                        value={serviceNameAr}
                        onChangeText={(value) => setServiceNameAr(value)}
                        placeholder='Service name (Ar) here'
                        placeholderTextColor={'#777777'}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={{
                marginTop: calcHeight(20),
                marginHorizontal: calcWidth(30)
            }} >
                <Text style={{
                    fontFamily: fonts.RegularSans,
                    fontSize: calcWidth(14),
                    fontWeight: '400',
                    color: '#4A5A51',
                    marginLeft: calcWidth(10)
                }} >
                    Estimate Time
                </Text>
                <TextInput
                    value={serviceTime}
                    onChangeText={(value) => setServiceTime(value)}
                    placeholder='0'
                    placeholderTextColor={'#777777'}
                    style={styles.fullInput}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                marginHorizontal: calcWidth(30),
                marginTop: calcHeight(20),
                justifyContent: 'space-between'
            }} >
                <View>
                    <Text style={{
                        fontFamily: fonts.SemiBoldSans,
                        fontSize: calcWidth(14),
                        fontWeight: '600',
                        color: '#4A5A51',
                        marginLeft: calcWidth(10)
                    }} >
                        Price <Text style={{
                            fontFamily: fonts.RegularSans,
                            fontWeight: '400',
                        }}>(Before)</Text>
                    </Text>
                    <TextInput
                        value={priceBefore}
                        onChangeText={(value) => setPriceBefore(value)}
                        placeholder='0.0'
                        placeholderTextColor={'#777777'}
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text style={{
                        fontFamily: fonts.SemiBoldSans,
                        fontSize: calcWidth(14),
                        fontWeight: '600',
                        color: '#4A5A51',
                        marginLeft: calcWidth(10)
                    }} >
                        Price <Text style={{
                            fontFamily: fonts.RegularSans,
                            fontWeight: '400',
                        }}>(After)</Text>
                    </Text>
                    <TextInput
                        value={priceAfter}
                        onChangeText={(value) => setPriceAfter(value)}
                        placeholder='0.0'
                        placeholderTextColor={'#777777'}
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => addServiceApi()}
                style={styles.addServiceButton} >
                <LinearGradient
                    useAngle={true}
                    angle={-266}
                    style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                    <Text style={styles.addServiceText} >
                        ADD SERVICE
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export { AddService };
