import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';

class Peta extends React.Component {
  state = {
    data: [
      {
        id: 1,
        kategori: 'pertanian',
        title: 'Hama Wereng',
        deskripsi: 'Hama wereng adalah hama',
        image:
          'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/5-Characters-Sanji-Can-Beat.jpg',
        status: 'belum ditanggapi',
      },
      {
        id: 2,
        kategori: 'pertanian',
        title: 'Ikan Mati',
        deskripsi: 'Ikan abis tuh mati',
        image:
          'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/5-Characters-Sanji-Can-Beat.jpg',
        status: 'belum ditanggapi',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Peta</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.boxMap}>
            <MapView
              style={{
                height: 150,
                width: '100%',
              }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>Bidang Tanah dan Properti</Text>
          </View>
          {this.state.data.map((value, key) => {
            return (
              <View key={key} style={styles.boxContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.props.navigation.navigate('PetaDetail')}>
                  <View style={styles.boxContent}>
                    <Image source={{uri: value.image}} style={styles.images} />
                    <Text style={styles.text1}>{value.title}</Text>
                    <Icon name="chevron-right" size={40} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
export default Peta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#19D2BA',
  },
  textHeader: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  boxMap: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTitle: {
    height: 50,
    width: '100%',
    borderColor: 'grey',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    elevation: 3,
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    color: '#444444',
  },
  boxContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  images: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  text1: {
    marginLeft: 5,
    width: '60%',
  },
});
