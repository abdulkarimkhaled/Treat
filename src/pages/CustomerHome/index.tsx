// @ts-nocheck
import React, { LegacyRef, useRef, useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FlatList, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { FirstRoute } from './FirstRoute';
import { SecondRoute } from './SecondRoute';
import { ThirdRoute } from './ThirdRoute';
import { fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';
import Search from '../../icons/svgs/Search';
import Map from '../../icons/svgs/Map';
import Carousel from 'react-native-snap-carousel';
import { SpaItem } from '../../components/organisms/SpaItem';
import NavigationService from '../../navigation/NavigationService';
import { LocationModal } from '../../components/models/Location';
import { FilterModal } from '../../components/models/FilterModal';

function CustomerHome() {
    const [search, setSearch] = useState('')
    const [selectedType, setSelectedType] = useState(1)
    const [selectedOption, setSelectedOption] = useState(0)
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [locationModal, setLocationModal] = useState(false)
    const [filterModal, setFilterModal] = useState(false)
    const carouselRef = useRef()
    const optionsRef = useRef()
    const [routes] = useState([
        { key: 'first', title: 'FEMALE' },
        { key: 'second', title: 'MALE' },
        { key: 'third', title: 'COUPLE' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: FirstRoute,
        third: FirstRoute,
    });

    const [locationSpa, setLocationSpa] = useState([
        { name: 'ALL' },
        { name: 'HARI CUTS' },
        { name: 'BARBERSHOP' },
        { name: 'SPA' },
        { name: 'MESSAGE' },
        { name: 'TRIM' },
        { name: 'MIX CUT' },
        { name: 'BEARD CUT' },
    ])

    const [carouselItems, setCarouselItems] = useState([
        { name: '1', index: 0 },
        { name: '2', index: 1 },
        { name: '3', index: 2 },
        { name: '4', index: 3 },
        { name: '5', index: 4 },
        { name: '6', index: 5 },
    ])

    const [spaSalons, setSpaSalons] = useState([
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#5EAF82', floatingText: 'SPECIAL' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#050505', floatingText: 'SAVE 20%' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#5EAF82', floatingText: 'SPECIAL' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
    ])

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                {...props}
                activeColor='#4A5A51'
                inactiveColor='#AFAFAF'
                indicatorStyle={{
                    backgroundColor: 'transparent',
                }}
                renderLabel={(scene: Scene<Route> & {
                    focused: boolean;
                    color: string;
                }) => {
                    return (
                        <View style={{}} >
                            <Text style={{
                                fontFamily: fonts.SemiBoldSans,
                                fontSize: calcWidth(14),
                                fontWeight: '600',
                                color: scene.color
                            }} >{scene.route.title}</Text>
                            <View style={{
                                backgroundColor: !scene.focused ? 'transparent' : '#4A5A51',
                                width: '100%',
                                height: calcHeight(2),
                                marginTop: calcHeight(10)
                            }} ></View>
                        </View>
                    )
                }}
                style={{
                    backgroundColor: '#F6F6F6',
                    width: calcWidth(474),
                    shadowColor: 'transparent',
                    alignSelf: 'center',
                }}
            />
        )
    };

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                carouselRef?.current?.snapToItem(item.index)
            }} style={styles.slide}>
            </TouchableOpacity>
        );
    }

    const renderLocationSpa = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setSelectedOption(index)
                    optionsRef?.current?.scrollToIndex({ animated: true, index: index })
                }}
                style={styles.option} >
                <Text style={[styles.selectedOption, selectedOption != index && styles.notSelectedOption]} >{item.name}</Text>
                <View style={[styles.selectedLine, selectedOption != index && styles.notSelectedLine]} />
            </TouchableOpacity>
        )
    }

    const renderSpaSalons = ({ item, index }: any) => {
        return (
            <SpaItem
                image={item.image}
                title={item.title}
                floatingColor={item.floatingColor}
                floatingText={item.floatingText}
                location={item.location}
                rating={item.rating}
                rates={item.rates}
                distance={item.distance}
                distanceType={item.distanceType}
                onPress={() => NavigationService.navigate('SpaDetails')}
            />
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Header
                onPressFilter={() => setFilterModal(true)}
                onPressPin={() => setLocationModal(true)}
                line bellBool filterBool pinBool />
            <View style={styles.searchContainer} >
                <View style={styles.inputContainer} >
                    <Search />
                    <TextInput
                        placeholder='What are you looking for?'
                        placeholderTextColor={'#777777'}
                        value={search}
                        numberOfLines={1}
                        style={styles.input}
                        onChangeText={(value) => { setSearch(value) }}
                        onSubmitEditing={() => NavigationService.navigate('SearchScreen')}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        NavigationService.navigate('MapScreen')
                    }}
                    style={styles.mapButton} >
                    <Map />
                </TouchableOpacity>
            </View>
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
            <ScrollView>
                {selectedType == 1 ? <Carousel
                    ref={carouselRef}
                    data={carouselItems}
                    renderItem={_renderItem}
                    sliderWidth={calcWidth(370)}
                    itemWidth={calcWidth(270)}
                    layout={'default'}
                    loop={true}
                    autoplay={true}
                    containerCustomStyle={{ alignSelf: "center" }}
                    maxToRenderPerBatch={3}
                /> : <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                />}
                <FlatList
                    ref={optionsRef}
                    data={locationSpa}
                    horizontal
                    bounces={false}
                    style={styles.list}
                    renderItem={renderLocationSpa}
                    showsHorizontalScrollIndicator={false}
                />
                <FlatList
                    data={spaSalons}
                    style={styles.spaList}
                    renderItem={renderSpaSalons}
                    showsVerticalScrollIndicator={false}
                />
                <LocationModal
                    setVisible={setLocationModal}
                    visible={locationModal}
                />
                <FilterModal
                    setVisible={setFilterModal}
                    visible={filterModal}
                />
            </ScrollView>
        </View>
    );
}

export { CustomerHome };
