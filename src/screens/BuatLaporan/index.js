import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class BuatLaporan extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.textHeader}>Lapor Online</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.cameraContainer}>
            <View style={styles.boxCamera}>
              <Icon name="camera" size={100} color="grey" />
            </View>
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Pilih Kategori</Text>
            <View style={styles.childBox}>
              <Text>Pertanian</Text>
              <Icon name="chevron-down" size={25} />
            </View>
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Judul</Text>
            <TextInput style={styles.childBox} placeholder="Masukan Judul" />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Deskripsi</Text>
            <TextInput
              style={{
                ...styles.childBox,
                height: 150,
              }}
              placeholder="Masukan Deskripsi"
              textAlignVertical="top"
            />
          </View>
          <View style={styles.boxContent}>
            <TouchableNativeFeedback>
              <View
                style={{
                  ...styles.childBox,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#19D2BA',
                  borderColor: 'white',
                }}
                placeholder="Masukan Deskripsi"
                textAlignVertical="top">
                <Text style={{color: 'white'}}>LAPORKAN</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default BuatLaporan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#19D2BA',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  textHeader: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cameraContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxCamera: {
    height: 200,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text1: {
    color: '#444444',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  childBox: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
