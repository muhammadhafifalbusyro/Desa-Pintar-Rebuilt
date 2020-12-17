import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Akun extends React.Component {
  state = {
    nama: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    alamat: '',
    jenisKelamin: '',
    pendidikanTerakhir: '',
    potensi: '',
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    AsyncStorage.getItem('access').then(value => {
      console.log('ini token profil ' + value);
      const url = 'https://api.istudios.id/v1/users/me';
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
        .then(res => res.json())
        .then(reJson => {
          console.log(reJson);
          if (reJson.profile) {
            this.setState({
              nama: reJson.profile.nama,
              nik: reJson.profile.nik,
              tempatLahir: reJson.profile.tempat_lahir,
              tanggalLahir: reJson.profile.tanggal_lahir,
              jenisKelamin: reJson.profile.kelamin,
              pendidikanTerakhir: reJson.profile.pendidikan,
              potensi: reJson.profile.potensi,
              alamat: reJson.profile.alamat,
            });
            ToastAndroid.show(
              'Berhasil mengambil data',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          } else {
            ToastAndroid.show(
              'Gagal mengambil data',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
        })
        .catch(er => {
          console.log(er);
          ToastAndroid.show(
            'Jaringan error',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Akun</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.boxProfile}>
            <Image
              source={require('../../assets/images/ilu_login.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileContent}>
              <Text style={styles.textProfileContent}>{this.state.nama}</Text>
              <Text style={styles.textProfileContent}>{this.state.nik}</Text>
              <TouchableOpacity
                style={styles.buttonEditProfile}
                activeOpacity={0.8}
                delayPressIn={1}>
                <Text style={styles.textButtonEditProfile}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxProfile2}>
            <Text style={styles.textProfile}>Tempat & Tanggal Lahir</Text>
            <Text style={styles.textprofile2}>
              {this.state.tempatLahir}, {this.state.tanggalLahir}
            </Text>
          </View>
          <View style={styles.boxProfile2}>
            <Text style={styles.textProfile}>Alamat</Text>
            <Text style={styles.textprofile2}>{this.state.alamat}</Text>
          </View>
          <View style={styles.boxProfile2}>
            <Text style={styles.textProfile}>Jenis Kelamin</Text>
            <Text style={styles.textprofile2}>{this.state.jenisKelamin}</Text>
          </View>
          <View style={styles.boxProfile2}>
            <Text style={styles.textProfile}>Pendidikan Terakhir</Text>
            <Text style={styles.textprofile2}>
              {this.state.pendidikanTerakhir}
            </Text>
          </View>
          <View style={styles.boxProfile2}>
            <Text style={styles.textProfile}>Potensi</Text>
            <Text style={styles.textprofile2}>{this.state.potensi}</Text>
          </View>
          <View style={styles.boxLogout}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.replace('Login')}>
              <View style={styles.buttonLogout}>
                <Text style={styles.textButtonLogout}>LOGOUT</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Akun;

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
  boxProfile: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  textProfileContent: {
    marginLeft: 10,
    color: '#444444',
  },
  buttonEditProfile: {
    padding: 3,
    backgroundColor: '#FA7F72',
    marginLeft: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 3,
  },
  textButtonEditProfile: {
    color: 'white',
    fontSize: 12,
  },
  boxProfile2: {
    padding: 15,
  },
  textProfile: {
    color: '#444444',
  },
  textprofile2: {
    color: '#444444',
    fontWeight: 'bold',
  },
  boxLogout: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogout: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA7F72',
    borderRadius: 5,
    elevation: 5,
  },
  textButtonLogout: {
    color: 'white',
  },
});
