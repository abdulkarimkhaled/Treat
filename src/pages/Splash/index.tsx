{/* 
    Splash screen that determines whether the current user is logged in or not 
    to navigate him/her based on the cached data
*/}
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { icons } from '../../icons/pngs';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import LogoText from '../../icons/svgs/LogoText';

function Splash() {
    const authData = useSelector((state: { authReducer: { token: string, type: string } }) => state?.authReducer)

    useEffect(() => {
        setTimeout(() => {
            if (authData.token && authData.type == 'branch') {
                NavigationService.reset('MyTabs')
            } else {
                NavigationService.reset('Login')
            }
        }, 800);
    }, [])


    return (
        <LinearGradient
            colors={['#344039', '#55675C', '#5E7266']}
            style={styles.container}>
            <LogoText color={'white'} />
        </LinearGradient>
    );
}

export { Splash };
