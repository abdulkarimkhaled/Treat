import React, { useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { calcHeight, calcWidth } from '../../config/metrics';
import { BookingItem } from '../../components/organisms/BookingItem';
import Customers from '../../icons/svgs/Customers';
import Edit from '../../icons/svgs/Edit';
import Delete from '../../icons/svgs/Delete';
import { DeleteService } from '../../components/models/DeleteService';
export function SecondRoute(props: any) {
    const renderServices = ({ item, index }: any) => {
        return (
            <View style={styles.servicesContainer} >
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: calcWidth(10),
                    paddingHorizontal: calcWidth(15),
                    paddingVertical: calcHeight(8),
                    width: calcWidth(250),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }} >
                    <View>
                        <Text style={styles.serviceName} >
                            {item.name}
                        </Text>
                        <Text style={styles.serviceType} >
                            {item.branch_name}
                        </Text>
                    </View>
                    <Customers />
                </View>
                <TouchableOpacity onPress={() => props.pressedEdit(item)} style={styles.editButton} >
                    <Edit />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setDeleteTrue(item)} style={styles.deleteButton}>
                    <Delete color={'#4A5A51'} />
                </TouchableOpacity>
            </View>
        )
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: calcHeight(50) }} style={[
            // styles.container,
            { flexGrow: 0 }]} >
            {props.data ? <FlatList
                data={props.data.filter((item: any) => item.service_type == props.location).filter((item: any) => item.target_client_gender == 'Male')}
                style={{
                    marginTop: calcHeight(8),
                    alignSelf: 'center',
                    height: calcHeight(300)
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<View><Text>Not found</Text></View>}
                renderItem={renderServices}
            /> : <ActivityIndicator color={'#4A5A51'} size={'large'} />}

        </ScrollView>
    )
};