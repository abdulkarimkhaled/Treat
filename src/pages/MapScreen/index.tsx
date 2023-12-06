import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
    View,
    PermissionsAndroid,
    Platform,
    Alert,
    Linking,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

import MapView, { LatLng, PROVIDER_GOOGLE, UserLocationChangeEvent, enableLatestRenderer } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import GeolocationService from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import NavigationService from '../../navigation/NavigationService';
import { MapIndicator } from '../../icons/svgs';
import Back from '../../icons/svgs/Back';
import styles from './styles';
import Search from '../../icons/svgs/Search';
import LocateMe from '../../icons/svgs/LocateMe';
import { SpaItem } from '../../components/organisms/SpaItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// @ts-nocheck
enableLatestRenderer();

// By toggling this you can turn on/off the bug
const enableAnimation = true;

const MapScreen = (props: any) => {
    const [search, setSearch] = useState('')
    const currentCoordinatesRef = React.useRef<LatLng>();
    const [currentLocation, setCurrentLocation] = useState<LatLng>();
    const mapViewRef = useRef<MapView>(null);

    const [loading, setLoading] = useState(false);
    const [showPerm, setShowPerm] = useState(false);

    const [SpaSalon, setSpaSalon] = useState({
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg',
        title: 'Tacha Beauty Center',
        location: 'Riyadh',
        rating: '4.7',
        rates: '62',
        distance: '5',
        distanceType: 'KM',
        floatingColor: '#5EAF82',
        floatingText: 'SPECIAL'
    })
    const handleRegionChange = (region: any) => {
        setCurrentLocation(region);
    };

    const getCurrentIOSPermession = () => {
        setLoading(true);
        Geolocation.getCurrentPosition(
            position => {
                setCurrentLocation({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
            },
            error => {
                // console.log("Kimz ~ getCurrentIOSPermession ~ error:", error)
            },
            { enableHighAccuracy: true, timeout: 15000 },
        );
    }

    const getCoordinates = useCallback(async (agreed = false) => {

        // await Geolocation.requestAuthorization('whenInUse')
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        break;
                    case RESULTS.DENIED:
                        getCurrentIOSPermession()
                        break;
                    case RESULTS.LIMITED:
                        break;
                    case RESULTS.GRANTED:
                        getCurrentIOSPermession()
                        break;
                    case RESULTS.BLOCKED:
                        getCurrentIOSPermession()
                        break;
                }
            })
            .catch((error) => {
                // …
            });
    }, []);

    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        setCurrentLocation({
                            longitude: position.coords.longitude,
                            latitude: position.coords.latitude,
                        });
                    },
                    error => {
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
    };

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };



    useEffect(() => {
        if (Platform.OS === 'ios') {
            getCoordinates();
        } else {
            getLocation()
        }
    }, []);

    const onPressRecenter = React.useCallback(() => {
        if (currentCoordinatesRef.current) {
            const partialCamera = {
                center: {
                    latitude: currentCoordinatesRef.current.latitude,
                    longitude: currentCoordinatesRef.current.longitude,
                },
                zoom: 16,
            } as const;
            if (enableAnimation) {
                mapViewRef.current?.animateCamera(partialCamera);
            } else {
                mapViewRef.current?.setCamera(partialCamera);
            }
        }
    }, []);

    const onUserLocationChange = React.useCallback(
        (event: UserLocationChangeEvent) => {
            if (event.nativeEvent.coordinate) {
                currentCoordinatesRef.current = {
                    latitude: event.nativeEvent.coordinate.latitude,
                    longitude: event.nativeEvent.coordinate.longitude,
                };
            }
        },
        [],
    );

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <View style={styles.topContainer} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <View style={styles.inputContainer} >
                    <Search />
                    <TextInput
                        placeholder='Search for your address'
                        placeholderTextColor={'#777777'}
                        value={search}
                        numberOfLines={1}
                        style={styles.input}
                        onChangeText={(value) => { setSearch(value) }}
                    />
                </View>
            </View>
            {currentLocation?.longitude && (
                <MapView
                    ref={mapViewRef}
                    onUserLocationChange={onUserLocationChange}
                    loadingEnabled={true}
                    showsUserLocation={true}
                    onRegionChangeComplete={handleRegionChange}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    customMapStyle={require("../../config/mapStyle.json")}
                />)}
            <View style={styles.mapMarkerContainer}>
                <MapIndicator />
            </View>
            <View style={styles.lowerContainer}>
                <TouchableOpacity
                    onPress={() => {
                        onPressRecenter()
                    }}
                    style={styles.locateButton} >
                    <LocateMe />
                </TouchableOpacity>
                {!search ? <SpaItem
                    image={SpaSalon.image}
                    title={SpaSalon.title}
                    floatingColor={SpaSalon.floatingColor}
                    floatingText={SpaSalon.floatingText}
                    location={SpaSalon.location}
                    rating={SpaSalon.rating}
                    rates={SpaSalon.rates}
                /> : null}
                <TouchableOpacity style={[styles.confirmButton, search != '' && { backgroundColor: '#607569' }]} >
                    <Text style={styles.confirmText} >
                        {search ? "SORRY, WE DON'T COVERD THIS AREA" : 'CONFIRM PIN LOCATION'}
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};


export { MapScreen };