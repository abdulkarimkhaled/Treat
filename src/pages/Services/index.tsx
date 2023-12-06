import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { StatusBar, View, useWindowDimensions, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { FirstRoute } from './FirstRoute';
import { SecondRoute } from './SecondRoute';
import { ThirdRoute } from './ThirdRoute';
import { fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';
import Search from '../../icons/svgs/Search';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../navigation/NavigationService';
import { useDeleteServiceMutation, useGetServicesQuery } from '../../apis/generalAPIs';
import { useSelector } from 'react-redux';
import { DeleteService } from '../../components/models/DeleteService';

function Services() {
    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)
    const [search, setSearch] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteItem, setDeleteItem] = useState<any>(null)
    const [selectedType, setSelectedType] = useState('Location')
    const { data, refetch } = useGetServicesQuery(authToken)
    const [deleteServiceApi, deleteResult] = useDeleteServiceMutation()

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'FEMALE' },
        { key: 'second', title: 'MALE' },
        { key: 'third', title: 'COUPLE' },
    ]);
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useLayoutEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setTimeout(() => {
                setKeyboardStatus(false);
            }, 100);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                {...props}
                activeColor='#4A5A51'
                inactiveColor='#AFAFAF'
                indicatorStyle={{
                    backgroundColor: '#4A5A51',
                    width: calcWidth(65)
                }}
                indicatorContainerStyle={{
                    left: calcWidth(30),
                    borderColor: 'transparent',
                    borderBottomColor: '#ECEDED',

                }}
                style={{
                    backgroundColor: '#F6F6F6',
                    width: calcWidth(373),
                    alignSelf: 'center',
                    marginBottom: calcHeight(20),
                    shadowColor: 'transparent',
                }}
                labelStyle={{
                    fontFamily: fonts.SemiBoldSans,
                    fontSize: calcWidth(14),
                    fontWeight: '600',
                }}
            />
        )
    };

    useEffect(() => {
        if (data?.data) {
            console.log("Kimz ~ useEffect ~ Services", data?.data)
        }
    }, [data])

    const deleteService = (item: any) => {
        if (deleteItem)
            deleteServiceApi({ token: authToken, id: item.id })
    }

    useEffect(() => {
        if (deleteResult.isSuccess) {
            setDeleteItem(null)
            refetch()
        }
    }, [deleteResult])


    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#F6F6F6', }} >
            <View style={{ flex: 1 }} >
                <StatusBar barStyle={'dark-content'} />
                <Header bellBool line />
                <View style={styles.inputContainer} >
                    <Search />
                    <TextInput
                        placeholder='What are you looking for?'
                        placeholderTextColor={'#777777'}
                        value={search}
                        numberOfLines={1}
                        style={styles.input}
                        onChangeText={(value) => { setSearch(value) }}
                    />
                </View>
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
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'first':
                                return <FirstRoute
                                    setDeleteTrue={(item: any) => {
                                        setDeleteItem(item)
                                        setDeleteModal(true)
                                    }}
                                    pressedEdit={(item: any) => {
                                        NavigationService.navigate('EditService', { item, onBack: () => refetch() })
                                    }}
                                    data={data?.data}
                                    search={search}
                                    location={selectedType} />
                            case 'second':
                                return <SecondRoute
                                    setDeleteTrue={(item: any) => {
                                        setDeleteItem(item)
                                        setDeleteModal(true)
                                    }}
                                    pressedEdit={(item: any) => {
                                        NavigationService.navigate('EditService', { item, onBack: () => refetch() })
                                    }}
                                    data={data?.data}
                                    search={search}
                                    location={selectedType} />
                            case 'third':
                                return <ThirdRoute
                                    setDeleteTrue={(item: any) => {
                                        setDeleteItem(item)
                                        setDeleteModal(true)
                                    }}
                                    pressedEdit={(item: any) => {
                                        NavigationService.navigate('EditService', { item, onBack: () => refetch() })
                                    }}
                                    data={data?.data}
                                    search={search}
                                    location={selectedType} />
                            default:
                                return null;
                        }
                    }}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                />
                {!keyboardStatus ? <TouchableOpacity
                    onPress={() => NavigationService.navigate('AddService')}
                    style={styles.addServiceButton} >
                    <LinearGradient
                        useAngle={true}
                        angle={-266}
                        style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                        <Text style={styles.addServiceText} >
                            ADD NEW SERVICE
                        </Text>
                    </LinearGradient>
                </TouchableOpacity> : null}
            </View>
            <DeleteService
                onPress={() => deleteService(deleteItem)}
                title={deleteItem ? deleteItem?.name : ''}
                setVisible={setDeleteModal}
                visible={deleteModal}
            />
        </KeyboardAwareScrollView>
    );
}

export { Services };
