import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  // Definindo shared values para os paddings
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation =useNavigation();

  // Criando estilos animados
  const animatedRing1Style = useAnimatedStyle(() => ({
    padding: ring1padding.value,
  }));

  const animatedRing2Style = useAnimatedStyle(() => ({
    padding: ring2padding.value,
  }));

  // Animando os paddings ao carregar a tela
  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => (ring1padding.value = withSpring(hp(5))), 100);
    setTimeout(() => (ring2padding.value = withSpring(hp(5.5))), 300);

    setTimeout(() =>navigation.navigate('Home'),2500)
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313A4B' }}>
      <StatusBar barStyle="dark-content" />

      {/* Logo com animação de padding */}
      <Animated.View
        style={[
          { backgroundColor: 'rgba(228,176,178, 0.2)', borderRadius: 9999 },
          animatedRing1Style, // Aplicando o estilo animado do primeiro anel
        ]}
      >
        <Animated.View
          style={[
            { backgroundColor: 'rgba(228,176,178, 0.2)', borderRadius: 9999 },
            animatedRing2Style, // Aplicando o estilo animado do segundo anel
          ]}
        >
          <Image
            source={require('../assets/images/welcome.jpg')}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>

      {/* Título */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', color: 'white', letterSpacing: 2, fontSize: hp(7) }}>
          Pinkie.fy
        </Text>

        <Text style={{ fontWeight: '500', color: 'white', letterSpacing: 2, fontSize: hp(2) }}>
         Um novo conceito em musicas
        </Text>
      </View>
    </View>
  );
}