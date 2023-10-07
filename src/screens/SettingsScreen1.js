import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Asegúrate de haber instalado el paquete react-native-maps
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import background from 'navbar1/assets/fondo2.jpg';

const SettingsScreen1 = () => {

  return (
    <ImageBackground source={background} style={styles.background}>
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 31.72029,
          longitude: -106.42131,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: 31.72029, longitude: -106.42131 }}
          title="Instituto Tecnológico de Ciudad Juárez"
          description="¡Bienvenido al ITCJ!"
        />
      </MapView>
      <View style={{ padding: 10}}>
      <Text style={styles.welcomeText}>Información del Dispositivo:</Text>
        <Text>Plataforma: {Device.brand}</Text>
        <Text>Sistema Operativo: {Device.osName}</Text>
        <Text>Versión S.O.: {Device.osVersion}</Text>
        <Text>Procesador: {Device.supportedCpuArchitectures}</Text>
        <Text>Versión del Sistema: {Device.brand }</Text>
        <Text>Nombre del Dispositivo: {Device.deviceName}</Text>
        <Text>Modelo del Dispositivo: {Device.modelName}</Text>
        <Text>Compilacion del Dispositivo: {Device.osBuildId}</Text>
        <Text>Memoria RAM Total (MB): {Device.totalMemory / (1024 * 1024) }</Text>
      </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SettingsScreen1;
