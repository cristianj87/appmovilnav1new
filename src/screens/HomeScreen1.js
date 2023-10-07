import React from "react";
import {View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import { useNavigation } from '@react-navigation/native';
import WebView from 'react-native-webview';
import logo from 'navbar1/assets/home.png';
import background from 'navbar1/assets/fondo2.jpg';

const { width } = Dimensions.get('window');

const carouselData = [
  {
    imageurl: 'http://cdjuarez.tecnm.mx/img/img_slider/99990926.png',
  },
  {
    imageurl: 'http://cdjuarez.tecnm.mx/img/img_slider/11110928.jpg',
  },
  {
    imageurl: 'http://cdjuarez.tecnm.mx/img/img_slider/11120921.jpg',
  },
  {
    imageurl: 'http://cdjuarez.tecnm.mx/img/img_slider/modificacion_de_datos0329.jpg',
  },
  {
    imageurl: 'http://cdjuarez.tecnm.mx/img/img_slider/56640904.png',
  },
];

const HomeScreen1 = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  const renderItem = data => (
    
      <View 
      key={data.imageurl}
      style={styles.cardContainer}
        >
          <View
        style={styles.cardWrapper}
      >
        <Image
          style={styles.card}
          source={{ uri: data.imageurl }}
        />
        </View>
        </View>
  );

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bienvenido usuario</Text>
        <Image source={logo} style={styles.logo} />

        <TouchableOpacity style={styles.button} onPress={() => handleNavigate("SII ITCJ")}>
          <Text style={styles.buttonText}>SII ITCJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNavigate("WEB ITCJ")}>
          <Text style={styles.buttonText}>WEB ITCJ</Text>
        </TouchableOpacity>

        <Carousel
          data={carouselData}
          renderItem={renderItem}
          pagination={PaginationLight}
          //sliderWidth={300} // Ancho del carrusel
          //itemWidth={300} // Ancho de los elementos del carrusel
          layout={'default'}
          loop
        autoplay
        />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff', // Color de fondo del botón
    padding: 12,
    borderRadius: 5,
    marginVertical: 20,
    width: 110,
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //width,
  },
  card: {
    width: width * 1.0,
    height: width * 0.6,
  },
  buttonText: {
    color: '#ffffff', // Color del texto del botón
    fontSize: 18,
  },
cardWrapper: {
  borderRadius: 4,
  overflow: 'hidden',
},
});

export default HomeScreen1;