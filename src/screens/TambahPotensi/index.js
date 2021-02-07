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
  ImageBackground,
  Modal,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

// const accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3ODMyODMwLCJqdGkiOiJhMGU1ZTRjYzYxZDI0MWVjOWIyZTIxOTQxZWEyMDFlNSIsInVzZXJfaWQiOjF9.n33NInIK_xvOg74F1KMJIBikzlZn2_6dZAr8qEip8WM';
class TambahPotensi extends React.Component {
  state = {
    avatarSource: '',
    fileName: '',
    type: '',
    uri: '',
    fileSize: '',
    kategori: 'Pilih Kategori',
    visible: false,
    dataKategori: [],
    kategoriID: '',
    judul: '',
    deskripsi: '',
    modalVisible: false,
    kontak: '',
    checkDefault: null,
    geometry: '',
    centroid: '',
    koordinat:'',
    data: [
      {
        id: 1,
        kategori: 'pertanian',
        title: 'Hama Wereng',
        deskripsi: 'Hama wereng adalah hama',
        image:
          'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/5-Characters-Sanji-Can-Beat.jpg',
        status: 'belum ditanggapi',
        geometry: '1212',
        centroid: '12345',
        koordinat: '12345',
      },
      {
        id: 2,
        kategori: 'pertanian',
        title: 'Ikan Mati',
        deskripsi: 'Ikan abis tuh mati',
        image:
          'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/5-Characters-Sanji-Can-Beat.jpg',
        status: 'belum ditanggapi',
        geometry: '1212',
        centroid: '12345',
        koordinat: '12345',
      },
    ],
  };
  componentDidMount() {
    this.getDataKategori();
  }
  getDataKategori = () => {
    AsyncStorage.getItem('access').then(value => {
      const token = value;
      const url = 'http://156.67.219.143/v1/kategorilapor/';
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => res.json())
        .then(resJson => {
          if (resJson.data) {
            this.setState({dataKategori: resJson.data});
            ToastAndroid.show(
              'Data berhasil didapatkan',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          } else {
            console.log('error');
            ToastAndroid.show(
              'Data gagal didapatkan',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
        })
        .catch(er => {
          ToastAndroid.show(
            'Data gagal didapatkan',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        });
    });
  };
  pickerImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        const fileName = response.fileName;
        const type = response.type;
        const uri = response.uri;
        const fileSize = response.fileSize;
        console.log('ininininini ' + fileName);
        this.setState({
          avatarSource: source,
          fileName: fileName,
          type: type,
          uri: uri,
          fileSize: fileSize,
        });
      }
    });
  };
  imageBox = () => {
    if (this.state.fileName == '') {
      return (
        <View style={styles.boxCamera}>
          <Icon
            name="camera"
            size={100}
            color="grey"
            onPress={() => this.pickerImage()}
          />
        </View>
      );
    } else {
      return (
        <ImageBackground
          style={{...styles.boxCamera, resizeMode: 'cover'}}
          source={this.state.avatarSource}>
          <Icon
            name="camera"
            size={100}
            color="grey"
            onPress={() => this.pickerImage()}
          />
        </ImageBackground>
      );
    }
  };
  submit = () => {
    AsyncStorage.getItem('access').then(value => {
      const {
        fileName,
        kategoriID,
        judul,
        deskripsi,
        kontak,
        geometry,
        centroid,
        koordinat,
      } = this.state;
      const url = 'https://api.istudios.id/v1/potensi/';
      if (
        fileName != '' &&
        kontak != '' &&
        judul != '' &&
        deskripsi != '' &&
        geometry != ''
      ) {
        this.setState({modalVisible: true});
        let image = {
          uri: this.state.uri,
          type: this.state.type,
          name: this.state.fileName,
        };

        const formData = new FormData();

        formData.append('kategori', 1);
        formData.append('bidang', '');
        formData.append('judul', judul);
        formData.append('isi', deskripsi);
        formData.append('gambar', image);
        formData.append('geometry', geometry);
        formData.append('centroid', centroid);
        formData.append('koordinat', koordinat);

        console.log(formData);
        if (this.state.fileSize >= 1500000) {
          this.setState({modalVisible: false});
          ToastAndroid.show(
            'Foto terlalu besar, maksimal 1,5 MB',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        } else {
          fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${value}`,
            },
            body: formData,
          })
            .then(response => response.json())
            .then(json => {
              // console.log(json);
              // this.setState({modalVisible: false});
              if (json.data) {
                this.setState({modalVisible: false});
                ToastAndroid.show(
                  'Laporan berhasil ditambahkan',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
                );
                this.props.navigation.goBack();
              } else {
                this.setState({modalVisible: false});
                ToastAndroid.show(
                  'Laporan gagal ditambahkan',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
                );
              }
            })
            .catch(error => {
              this.setState({modalVisible: false});
              console.log(error);
              ToastAndroid.show(
                'Jaringan error',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            });
        }
      } else {
        ToastAndroid.show(
          'Data tidak boleh kosong',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.visible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => this.setState({visible: false})}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '40%',
                width: '90%',
                backgroundColor: 'white',
                elevation: 5,
                borderRadius: 5,
              }}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: 'rgba(0,0,0,0.3)',
                }}>
                <Text style={{fontWeight: 'bold'}}>Pilih Kategori</Text>
              </View>
              <ScrollView style={{flex: 1, padding: 10}}>
                {this.state.dataKategori.map((value, key) => {
                  return (
                    <View
                      key={key}
                      style={{
                        height: 40,
                        marginBottom: 3,
                        width: '100%',
                        padding: 5,
                        borderBottomWidth: 1,
                        borderColor: 'rgba(0,0,0,0.3)',
                      }}>
                      <Text
                        onPress={() =>
                          this.setState({
                            kategoriID: value.id,
                            kategori: value.nama,
                            visible: false,
                          })
                        }>
                        {value.nama}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            ToastAndroid.show(
              'Tunggu proses selesai',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'white',
                elevation: 5,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color="#19d2ba" />
              <Text>Loading...</Text>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.textHeader}>Edit Potensi</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.cameraContainer}>{this.imageBox()}</View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Judul</Text>
            <TextInput
              style={styles.childBox}
              placeholder="Masukan Judul"
              value={this.state.judul}
              onChangeText={teks => this.setState({judul: teks})}
            />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Deskripsi</Text>
            <TextInput
              value={this.state.deskripsi}
              onChangeText={teks => this.setState({deskripsi: teks})}
              style={{
                ...styles.childBox,
                height: 150,
              }}
              placeholder="Masukan Deskripsi"
              textAlignVertical="top"
            />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Nomor Kontak</Text>
            <TextInput
              style={styles.childBox}
              placeholder="Masukan Nomor Kontak"
              keyboardType="number-pad"
              value={this.state.kontak}
              onChangeText={teks => this.setState({kontak: teks})}
            />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Lokasi Potensi</Text>
            {this.state.data.map((value, key) => {
              if (this.state.checkDefault == value.id) {
                return (
                  <View key={key} style={styles.boxContainer2}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        this.setState({
                          checkDefault: value.id,
                          geometry: value.geometry,
                          centroid: value.centroid,
                          koordinat:value.koordinat
                        });
                      }}>
                      <View style={styles.boxContent2}>
                        <Image
                          source={{uri: value.image}}
                          style={styles.images2}
                        />
                        <Text style={styles.text12}>{value.title}</Text>
                        <Icon name="check" size={40} color="#19D2BA" />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <View key={key} style={styles.boxContainer2}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        this.setState({
                          checkDefault: value.id,
                          geometry: value.geometry,
                          centroid: value.centroid,
                          koordinat:value.koordinat
                        });
                      }}>
                      <View style={styles.boxContent2}>
                        <Image
                          source={{uri: value.image}}
                          style={styles.images2}
                        />
                        <Text style={styles.text12}>{value.title}</Text>
                        <Icon name="check" size={40} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }
            })}
          </View>
          <View style={styles.boxContent}>
            <TouchableNativeFeedback onPress={() => this.submit()}>
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
export default TambahPotensi;

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
  boxContainer2: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent2: {
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
  images2: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  text12: {
    marginLeft: 5,
    width: '60%',
  },
});
