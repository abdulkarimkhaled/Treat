import React, { FunctionComponent, ReactElement } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Customers from '../../../icons/svgs/Customers';
import { calcHeight, calcWidth } from '../../../config/metrics';
import DashedLine from 'react-native-dashed-line';
import LinearGradient from 'react-native-linear-gradient';
import { Gift, Share, ShareReceipt } from '../../../icons/svgs';
import moment from 'moment';

type Item = {
  name?: string
  id?: string
  appointment?: string
  date?: string
  leftToAccept?: string
  buttons?: boolean
  services?: Array<{
    name?: string
    customer?: number
    price?: string
  }>
  total?: string
  type?: string
  status?: string
  timeLeft?: string
  downloadReceipt?: boolean
  giftIcon?: boolean
  shareButton?: boolean
  rejectAccept?: boolean
  payNow?: boolean
  onAccept?: Function
  onReject?: Function
}
const BookingItem: FunctionComponent<Item> = ({
  name,
  id,
  appointment,
  date,
  leftToAccept,
  buttons,
  services,
  total,
  type,
  status,
  timeLeft,
  downloadReceipt,
  giftIcon,
  shareButton,
  rejectAccept,
  payNow,
  onAccept,
  onReject
}) => {
  const InfoBox = (title: string, text?: string, color?: boolean, time?: boolean) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.leftText} >
          {title}
        </Text>
        <Text style={[styles.rightText, color && { color: '#5EAF82' }, time && { color: '#B2866B' }]}>
          {text}
        </Text>
      </View>
    )
  }

  const renderServices = ({ item, index }: any) => {
    return (
      <View style={styles.thirdBookingHeader}>
        <Text style={styles.serviceInfo} >{item.name}</Text>
        <Text style={styles.dateDetails}>{item.start_time}</Text>
        <Text style={styles.totalServicePrice}>{item.price} Sar</Text>
      </View>
    )
  };

  return (
    <View style={styles.conatiner} >
      {giftIcon ? <View style={styles.giftContainer} >
        <Gift color={'#B2866B'} />
      </View> : null}
      {/* {InfoBox(type == 'customer' ? 'Salon' : 'Name', name)} */}
      {InfoBox('Order ID', id)}
      {InfoBox('Appointment', appointment)}
      {InfoBox('Booking Date', moment(date).format('DD/MM/yyyy - hh.mmA'))}
      {status ? InfoBox('Status', status, true) : null}
      {timeLeft ? InfoBox('Time left', timeLeft, false, true) : null}
      {buttons && type !== 'customer' ? <Text style={styles.leftToAccept} >{leftToAccept}</Text> : null}
      {type !== 'customer' ? <View>

        <FlatList
          data={services}
          ListHeaderComponent={() => {
            if (services && services.length > 0) {
              return (<View style={styles.secondBookingHeader} >
                <Text style={styles.services} >Services</Text>
                <Text style={styles.start}>Start Time</Text>
                <Text style={styles.total} >Total</Text>
              </View>)
            } else {
              return (<View />)
            }
          }}
          ItemSeparatorComponent={() =>
            <View style={{ height: 1, overflow: 'hidden', marginTop: calcHeight(8), marginBottom: calcHeight(4) }}>
              <View style={{ height: 2, borderWidth: 1, borderColor: '#ddd', borderStyle: 'dashed' }}></View>
            </View>}
          style={{ width: calcWidth(310), marginTop: calcHeight(8), flexGrow: 0 }}
          renderItem={renderServices}
        />
      </View> : <View style={styles.bookingContainer} >
        <View style={styles.secondBookingHeader} >
          <Text style={styles.services} >Services</Text>
          <Text style={styles.start}>Start Time</Text>
          <Text style={styles.total} >Total</Text>
        </View>
        <View style={styles.thirdBookingHeader}>
          <Text style={styles.serviceInfo} >Massage</Text>
          <Text style={styles.dateDetails}>{'9:30PM\n10/12/2023'}</Text>
          <Text style={styles.totalServicePrice}>50,00 sar</Text>
        </View>
        <DashedLine style={{ marginTop: calcHeight(10) }} dashColor='#495B5133' dashThickness={1} dashLength={calcWidth(9)} dashGap={calcWidth(6)} />
        <View style={styles.thirdBookingHeader}>
          <Text style={styles.serviceInfo} >SPA & SKIN CARE MOROCCAN HAMMAM</Text>
          <Text style={styles.dateDetails}>{'9:30PM\n10/12/2023'}</Text>
          <Text style={styles.totalServicePrice}>50,00 sar</Text>
        </View>
        <DashedLine style={{ marginTop: calcHeight(10) }} dashColor='#495B5133' dashThickness={1} dashLength={calcWidth(9)} dashGap={calcWidth(6)} />

      </View>}

      <View style={styles.totalContainer} >
        <Text style={styles.totalText} >
          Total
        </Text>
        <Text style={styles.totalPrice} >
          SR {total}
        </Text>
      </View>
      {buttons && type !== 'customer' ? <View style={styles.buttonsContainer} >
        <TouchableOpacity
          onPress={() => {
            if (onAccept) {
              onAccept()
            }
          }}
          style={[styles.acceptCustomerButton, {
            backgroundColor: '#5EAF82', borderColor: '#5EAF82'
          }]} >
          <Text style={styles.acceptCustomerText} >
            ACCEPT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (onReject) {
              onReject()
            }
          }} style={styles.rejectButton}>
          <Text style={styles.rejectText}>
            REJECT
          </Text>
        </TouchableOpacity>
      </View> : null}
      {rejectAccept ? <View style={styles.buttonsContainer} >
        <TouchableOpacity style={styles.rejectCustomerButton} >
          <Text style={styles.rejectCustomerText} >
            REJECT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptCustomerButton}>
          <Text style={styles.acceptCustomerText}>
            ACCEPT
          </Text>
        </TouchableOpacity>
      </View> : null}
      {buttons && type === 'customer' ? <View style={styles.buttonsContainer} >
        <TouchableOpacity style={[styles.cancelButton, shareButton && { width: calcWidth(258) }]} >
          <Text style={styles.cancelText} >
            {payNow ? "PAY NOW" : "CANCEL BOOKING"}
          </Text>
        </TouchableOpacity>
        {shareButton ? <View style={styles.iconContainer} >
          <ShareReceipt />
        </View> : null}
      </View> : null}
      {downloadReceipt ? <View style={styles.buttonsContainer} >
        <TouchableOpacity
          style={styles.shareButton} >
          <LinearGradient
            useAngle={true}
            angle={-266}
            style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
            <Text style={styles.shareText} >
              DOWNLOAD RECEIPT
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        {shareButton ? <View style={styles.iconContainer} >
          <ShareReceipt />
        </View> : null}
      </View> : null}
    </View>
  )
};

export { BookingItem };