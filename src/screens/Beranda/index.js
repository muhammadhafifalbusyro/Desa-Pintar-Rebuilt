import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  ToastAndroid,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const width = Dimensions.get('window').width;

class Beranda extends React.Component {
  state = {
    navDef: 'Berita',
    nav: ['Berita', 'Informasi', 'Potensi'],
    data: [],
    dataInformasi: [],
    dataPotensi: [],
  };
  componentDidMount() {
    this.getDataBerita();
    this.getDataInformasi();
    this.getDataPotensi();
  }
  getDataBerita = () => {
    const url = 'http://156.67.219.143/v1/artikel/';
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3NzM1OTI5LCJqdGkiOiI0NGJmZjEwYmQxMzk0ZWY4YjM5ZTE0YThkODU4MTBhNCIsInVzZXJfaWQiOjF9.jL_mVqIb6v1ZHJErKSxDAHuOs6sjLsZT7gn4chzD_Jk';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        if (resJson.data) {
          this.setState({data: resJson.data});
        } else if (resJson.code) {
          ToastAndroid.show(
            resJson.code,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }
      })
      .catch(er => {
        console.log(er);
      });
  };
  getDataInformasi = () => {
    const url = 'http://156.67.219.143/v1/informasi/';
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3NzM1OTI5LCJqdGkiOiI0NGJmZjEwYmQxMzk0ZWY4YjM5ZTE0YThkODU4MTBhNCIsInVzZXJfaWQiOjF9.jL_mVqIb6v1ZHJErKSxDAHuOs6sjLsZT7gn4chzD_Jk';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        if (resJson.data) {
          this.setState({dataInformasi: resJson.data});
        } else if (resJson.code) {
          ToastAndroid.show(
            resJson.code,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }
      })
      .catch(er => {
        console.log(er);
      });
  };
  getDataPotensi = () => {
    const url = 'http://156.67.219.143/v1/potensi/';
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3NzM1OTI5LCJqdGkiOiI0NGJmZjEwYmQxMzk0ZWY4YjM5ZTE0YThkODU4MTBhNCIsInVzZXJfaWQiOjF9.jL_mVqIb6v1ZHJErKSxDAHuOs6sjLsZT7gn4chzD_Jk';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        if (resJson.data) {
          this.setState({dataPotensi: resJson.data});
        } else if (resJson.code) {
          ToastAndroid.show(
            resJson.code,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }
      })
      .catch(er => {
        console.log(er);
      });
  };
  renderInfo = () => {
    if (this.state.navDef == 'Berita') {
      return this.state.data.map((value, key) => {
        return (
          <View key={key} style={styles.boxContainer}>
            <View style={styles.boxContent}>
              <Image
                source={require('../../assets/images/banner.png')}
                style={styles.images}
              />
              <Text style={styles.text1}>{value.judul}</Text>
              <Icon
                name="chevron-right"
                size={40}
                onPress={() =>
                  this.props.navigation.navigate('DetailBeranda', {
                    item: value,
                  })
                }
              />
            </View>
          </View>
        );
      });
    } else if (this.state.navDef == 'Informasi') {
      return this.state.dataInformasi.map((value, key) => {
        return (
          <View key={key} style={styles.boxContainer}>
            <View style={styles.boxContent}>
              <Image
                source={require('../../assets/images/banner.png')}
                style={styles.images}
              />
              <Text style={styles.text1}>{value.judul}</Text>
              <Icon
                name="chevron-right"
                size={40}
                onPress={() =>
                  this.props.navigation.navigate('DetailBeranda', {
                    item: value,
                  })
                }
              />
            </View>
          </View>
        );
      });
    } else if (this.state.navDef == 'Potensi') {
      return this.state.dataPotensi.map((value, key) => {
        return (
          <View key={key} style={styles.boxContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.boxContentSearch}>
                <TextInput placeholder="Cari Potensi" style={{width: '90%'}} />
                <Icon name="search" size={20} />
              </View>
            </View>
            <View style={styles.boxContent}>
              <Image
                source={require('../../assets/images/banner.png')}
                style={styles.images}
              />
              <Text style={styles.text1}>{value.judul}</Text>
              <Icon
                name="chevron-right"
                size={40}
                onPress={() =>
                  this.props.navigation.navigate('DetailBeranda', {
                    item: value,
                  })
                }
              />
            </View>
          </View>
        );
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Beranda</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.boxBanner}>
            <Image
              source={require('../../assets/images/banner.png')}
              style={styles.banner}
            />
          </View>
          <View style={styles.containerNav}>
            {this.state.nav.map((value, key) => {
              if (value == this.state.navDef) {
                return (
                  <TouchableNativeFeedback
                    key={key}
                    onPress={() => this.setState({navDef: value})}>
                    <View style={styles.boxNav}>
                      <Text style={styles.textNav}>{value}</Text>
                    </View>
                  </TouchableNativeFeedback>
                );
              } else {
                return (
                  <TouchableNativeFeedback
                    key={key}
                    onPress={() => this.setState({navDef: value})}>
                    <View style={{...styles.boxNav, backgroundColor: 'white'}}>
                      <Text style={{...styles.textNav, color: '#444444'}}>
                        {value}
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                );
              }
            })}
          </View>
          {this.renderInfo()}
        </ScrollView>
      </View>
    );
  }
}
export default Beranda;

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
  boxBanner: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  containerNav: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxNav: {
    height: 40,
    width: width / 3.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19D2BA',
    borderRadius: 5,
    elevation: 5,
  },
  textNav: {
    color: 'white',
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
  contentContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContentSearch: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
