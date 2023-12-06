import React, { useState } from 'react';
import { FlatList, Text, View } from "react-native";
import { Header } from '../../components/models/Header';
import { MoreItem } from '../../components/organisms/MoreItem';
import User from '../../icons/svgs/User';
import { calcHeight } from '../../config/metrics';
import styles from './styles';
import Lang from '../../icons/svgs/Lang';
import DisableAccount from '../../icons/svgs/DisableAccount';
import LogOut from '../../icons/svgs/LogOut';
import NavigationService from '../../navigation/NavigationService';
import { SpaItem } from '../../components/organisms/SpaItem';

function Favourites(props: any) {
    const [spaSalons, setSpaSalons] = useState([
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#5EAF82', floatingText: 'SPECIAL' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#050505', floatingText: 'SAVE 20%' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '#5EAF82', floatingText: 'SPECIAL' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg', title: 'Tacha Beauty Center', location: 'Riyadh', rating: '4.7', rates: '62', distance: '5', distanceType: 'KM', floatingColor: '', floatingText: '' },
    ])
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
                fav
            />
        )
    }
    return (
        <View style={styles.container}>
            <Header bellBool filterBool pinBool line />
            <FlatList
                data={spaSalons}
                style={styles.spaList}
                renderItem={renderSpaSalons}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export { Favourites };
