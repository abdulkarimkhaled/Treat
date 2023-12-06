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
import { useGetServicesCategoriesQuery, useUpdateServiceMutation } from '../../apis/generalAPIs';

function EditService(props: any) {
    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)
    const { data: categories } = useGetServicesCategoriesQuery(authToken)
    const [service] = useState(props.route.params.item)
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState<Array<{
        label: string
        value: string
    }>>([]);
    const [selectedType, setSelectedType] = useState(service.service_type == 'Location' ? 'Location' : 'Home')
    const [selectedGender, setSelectedGender] = useState(service.target_client_gender == 'Female' ? 1 : service.target_client_gender == 'Male' ? 2 : 3)
    const [serviceNameEn, setServiceNameEn] = useState(service.name)
    const [serviceNameAr, setServiceNameAr] = useState(service.name)
    const [serviceTime, setServiceTime] = useState(service.estimated_time)
    const [priceBefore, setPriceBefore] = useState(service.regular_price)
    const [priceAfter, setPriceAfter] = useState(service.sale_price)
    const [updateService, updateResult] = useUpdateServiceMutation()


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

            // setValue(categories?.data[service.service_category_id].id)
        }
    }, [categories])

    const editServiceApi = () => {
        let body = {
            service_id: service.id,
            ar: {
                name: 'العناية بالوجه'
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
        updateService({ token: authToken, body })
    }

    useEffect(() => {
        if (updateResult.isSuccess) {
            NavigationService.goBack()
            props.route.params.onBack()
        }
    }, [updateResult])

    return (
        <KeyboardAwareScrollView contentContainerStyle={{
            paddingBottom: calcHeight(100)
        }} style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Edit Service
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
                placeholder={!isFocus ? 'Select Category' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            <View style={styles.buttonsContainer} >
                <TouchableOpacity onPress={() => setSelectedType('Location')} style={[styles.locationButton, selectedType == 'Location' && styles.selectedGenderButton]} >
                    <Text style={[styles.locationText, selectedType == 'Location' && styles.selectedGenderText]} >
                        LOCATION SPA
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedType('Home')} style={[styles.homeButton, selectedType == 'Home' && styles.selectedGenderButton]}>
                    <Text style={[styles.homeText, selectedType == 'Home' && styles.selectedGenderText]}>
                        HOME SPA
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.buttonsContainer, { marginTop: calcHeight(37) }]} >
                <TouchableOpacity onPress={() => setSelectedGender(1)} style={[styles.genderButton, selectedGender == 1 && styles.selectedGenderButton]}>
                    <Text style={[styles.genderText, selectedGender == 1 && styles.selectedGenderText]}>
                        Female
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedGender(2)} style={[styles.genderButton, selectedGender == 2 && styles.selectedGenderButton]} >
                    <Text style={[styles.genderText, selectedGender == 2 && styles.selectedGenderText]} >
                        Male
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
                onPress={() => editServiceApi()}
                style={styles.addServiceButton} >
                <LinearGradient
                    useAngle={true}
                    angle={-266}
                    style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                    <Text style={styles.addServiceText} >
                        Edit SERVICE
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}

export { EditService };
