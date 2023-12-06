// @ts-nocheck
import React, { LegacyRef, useRef, useState } from 'react';
import { FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { calcHeight, calcWidth } from '../../config/metrics';
import Back from '../../icons/svgs/Back';
import User from '../../icons/svgs/User';
import Heart from '../../icons/svgs/Heart';
import { Gift, MinusBackGround, PlusBackGround, Time } from '../../icons/svgs';
import Star from '../../icons/svgs/Star';
import NavigationService from '../../navigation/NavigationService';
import { SelectArea } from '../../icons/svgs/SelectArea';
import { AddServiceModal } from '../../components/models/AddServiceModal';
import { GiftModal } from '../../components/models/GiftModal';

function SpaDetails(props: any) {
    const [addServiceVisible, setAddServiceVisible] = useState(false)
    const [giftVisible, setGiftVisible] = useState(false)
    const carouselRef = useRef()
    const [carouselItems, setCarouselItems] = useState([
        { name: 'https://picsum.photos/400/400', index: 0 },
        { name: 'https://picsum.photos/400/400', index: 1 },
        { name: 'https://picsum.photos/400/400', index: 2 },
        { name: 'https://picsum.photos/400/400', index: 3 },
        { name: 'https://picsum.photos/400/400', index: 4 },
        { name: 'https://picsum.photos/400/400', index: 5 },
    ])
    const [services, setServices] = useState([
        { name: 'ALL' },
        { name: 'HARI CUTS' },
        { name: 'BARBERSHOP' },
        { name: 'SPA' },
        { name: 'MESSAGE' },
        { name: 'TRIM' },
        { name: 'MIX CUT' },
        { name: 'BEARD CUT' },
    ])
    const [selectedSerive, setSelectedSerive] = useState(0)
    const [active, setActive] = useState(0)
    const [singleService, setSingleService] = useState([
        { image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: '50', time: '45', details: "industry's standard dummy ever since the an unknown .." },
        { image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: '50', time: '45', details: "industry's standard dummy ever since the an unknown ..", discount: '-20%' },
        { image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: '50', time: '45', details: "industry's standard dummy ever since the an unknown .." },
        { image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: '50', time: '45', details: "industry's standard dummy ever since the an unknown .." },
    ])
    const _renderItem = ({ item, index }: any) => {
        return (
            <Image style={styles.image} source={{ uri: item.name }} />
        );
    }
    const renderServices = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedSerive(index)}
                style={[styles.serviceContainer, selectedSerive == index && styles.selectedService]} >
                <Text style={[styles.service, selectedSerive == index && styles.selectedServiceText]} >{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const renderSingleService = ({ item, index }: any) => {
        return (
            <View
                style={styles.singleServiceContainer} >
                <Image style={styles.seriveImage} source={{ uri: item.image }} />
                <View style={{ width: calcWidth(160) }} >
                    <Text style={styles.singleTitle} >{item.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={styles.price} >SR {item.price}</Text>
                        <View style={styles.greyDot} />
                        <Text style={styles.timeMin}>{item.time}min</Text>
                    </View>
                    <Text style={styles.details} >{item.details}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setAddServiceVisible(true)}
                    style={{}} >
                    {index == 0 ? <MinusBackGround /> : <PlusBackGround />}
                </TouchableOpacity>
                {item.discount ? <View style={styles.discountView} >
                    <Text style={styles.discount}>{item.discount}</Text>
                </View> : null}
            </View>
        )
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: calcHeight(40) }} showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
            <StatusBar hidden />
            <LinearGradient
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradientButton} colors={['#3e3e3e', '#58585800']} >
                <TouchableOpacity
                    onPress={() => NavigationService.goBack()} style={styles.back} >
                    <Back color={'white'} />
                </TouchableOpacity>
                <Carousel
                    ref={carouselRef}
                    data={carouselItems}
                    renderItem={_renderItem}
                    sliderWidth={calcWidth(430)}
                    itemWidth={calcWidth(430)}
                    layout={'default'}
                    loop={true}
                    autoplay={true}
                    containerCustomStyle={{ alignSelf: "center" }}
                    maxToRenderPerBatch={3}
                    autoplayInterval={3000}
                    indicatorStyle='white'
                    pagingEnabled
                    onSnapToItem={(index) => setActive(index)}
                />
                <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={active}
                    containerStyle={{
                        position: 'absolute',
                        bottom: 0
                    }}
                    dotStyle={{
                        backgroundColor: '#FFFFFF',
                        width: calcWidth(15),
                        height: calcWidth(15),
                        borderRadius: calcWidth(7.5),
                        marginHorizontal: (-4)
                    }}
                    inactiveDotStyle={{
                        backgroundColor: '#FFFFFF80',
                        width: calcWidth(10),
                        height: calcWidth(10),
                        borderRadius: calcWidth(5)
                    }}
                    inactiveDotScale={1}
                />
            </LinearGradient>
            <View>
                <TouchableOpacity
                    onPress={() => setGiftVisible(true)}
                    style={styles.giftButton} >
                    <Gift />
                    <Text style={styles.giftText} >Send a Gift</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.titleView} >
                <View style={styles.titleImage} >
                    <User />
                </View>
                <View style={styles.titleTextContainer} >
                    <Text style={styles.title} >
                        Tacha Beauty Center
                    </Text>
                    <Text style={styles.subTitle} >
                        127 north moon, ryadh, 33510
                    </Text>
                </View>
                <Heart />
            </View>
            <View style={styles.detailsView} >
                <Time />
                <Text style={styles.openDay} >
                    Open Today
                </Text>
                <Star width={calcWidth(20)} />
                <Text style={styles.stars} >   4.9 (239)</Text>
            </View>
            <View style={styles.sep} />
            {/* <TouchableOpacity onPress={() => NavigationService.navigate('MapScreen')}  >
                <LinearGradient colors={['#B2866B', '#C18865']} style={styles.selectArea}>
                    <SelectArea />
                    <Text style={styles.selectAreaText} >SELECT YOUR AREA</Text>
                </LinearGradient>
            </TouchableOpacity> */}
            <Text style={styles.about} >About</Text>
            <Text style={styles.aboutDetails} >is simply dummy text the printing and typesetting industry lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer.</Text>
            <Text style={styles.about} >Opening Hours</Text>
            <View style={styles.openingContainer} >
                <View style={styles.dayTimeContainer} >
                    <View style={styles.greenDot} />
                    <View>
                        <Text style={styles.day} >Monday - Friday</Text>
                        <Text style={styles.time} >08.00am - 03.00pm</Text>
                    </View>
                </View>
                <View style={styles.dayTimeContainer} >
                    <View style={styles.greenDot} />
                    <View>
                        <Text style={styles.day} >Saturday - Sunday</Text>
                        <Text style={styles.time}>09.00am - 02.00pm</Text>
                    </View>
                </View>
            </View>
            <View style={styles.sep} />
            <Text style={styles.about} >Our Services</Text>
            <FlatList
                data={services}
                style={styles.list}
                contentContainerStyle={{ paddingRight: calcWidth(40) }}
                renderItem={renderServices}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={singleService}
                renderItem={renderSingleService}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.bottomContainer} >
                <View>
                    <Text style={styles.total} >
                        Total <Text style={styles.totalServices} >
                            (0 Services)
                        </Text>
                    </Text>
                    <Text style={styles.totalPrice} >
                        SR 0.0
                    </Text>
                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate('CheckOut')} >
                    <LinearGradient angle={-266}
                        style={styles.gradientBookNow} colors={['#607569', '#4A5A51']}>
                        <Text style={styles.bookNow} >BOOK NOW</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <AddServiceModal
                visible={addServiceVisible}
                setVisible={setAddServiceVisible}
            />
            <GiftModal
                visible={giftVisible}
                setVisible={setGiftVisible}
            />
        </ScrollView>
    );
}

export { SpaDetails };
