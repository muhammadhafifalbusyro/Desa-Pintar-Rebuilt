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
import Icon from 'react-native-vector-icons/Feather';

class Lapor extends React.Component {
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
          <Text style={styles.textHeader}>Lapor Online</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {this.state.data.map((value, key) => {
            return (
              <View key={key} style={styles.boxContent}>
                <View style={styles.childBoxContent}>
                  <Image source={{uri: value.image}} style={styles.image} />
                  <View style={styles.content1}>
                    <Text style={styles.text1}>#{value.kategori}</Text>
                    <View style={styles.statusBox}>
                      <Text style={styles.text2}>{value.status}</Text>
                    </View>
                  </View>
                  <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>{value.title}</Text>
                  </View>
                  <View style={styles.boxDesc}>
                    <Text style={styles.textDesc}>{value.deskripsi}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={() => this.props.navigation.navigate('BuatLaporan')}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Lapor;

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
  addButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19D2BA',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  boxContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childBoxContent: {
    height: 300,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  content1: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  statusBox: {
    backgroundColor: '#FA7F72',
    padding: 4,
    borderRadius: 3,
  },
  text1: {
    color: 'green',
  },
  text2: {
    fontSize: 12,
    color: 'white',
  },
  boxTitle: {
    paddingHorizontal: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#444444',
  },
  textDesc: {
    fontSize: 12,
    color: '#444444',
  },
  boxDesc: {
    paddingHorizontal: 10,
  },
});
