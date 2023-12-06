// @ts-nocheck
import React, { useRef, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import Map from '../../icons/svgs/Map';
import Search from '../../icons/svgs/Search';
import { SpaItem } from '../../components/organisms/SpaItem';
import { icons } from '../../icons/pngs';

function SearchScreen(props: any) {
    const [search, setSearch] = useState('')
    const [selectedOption, setSelectedOption] = useState(0)
    const optionsRef = useRef()
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
    const [spaSalons, setSpaSalons] = useState([
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#5EAF82', floatingText: 'SPECIAL' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#050505', floatingText: 'SAVE 20%' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#5EAF82', floatingText: 'SPECIAL' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
    ])
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
            />
        )
    }

    return (
        <View style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Search Results
                </Text>
            </View>
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

                    />
                </View>
                <View style={styles.mapButton} >
                    <Map />
                </View>
            </View>
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
                data={spaSalons.filter(item => item.title.includes(search))}
                style={styles.spaList}
                renderItem={renderSpaSalons}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer} >
                        <Image style={styles.image} source={icons.EmptySearch} />
                        <Text style={styles.noResults} >No results found</Text>
                        <Text style={styles.emptyText} >We could not find anything based on your search Try verifying spelling, location and date or changing the category then search again.</Text>
                    </View>}
            />
        </View>
    );
}

export { SearchScreen };
