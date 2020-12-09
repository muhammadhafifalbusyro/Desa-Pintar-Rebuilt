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
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class PetaDetail extends React.Component {
  state = {
    promosi: false,
  };
  promosi = () => {
    if (this.state.promosi) {
      return (
        <View style={{width: '100%'}}>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Jual/Sewa/Kerja sama</Text>
            <View style={styles.childBox}>
              <Text>Jual</Text>
              <Icon name="chevron-down" size={25} />
            </View>
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Harga Per M2</Text>
            <TextInput style={styles.childBox} placeholder="Masukan Harga" />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.text1}>Narasi</Text>
            <TextInput
              style={{
                ...styles.childBox,
                height: 150,
              }}
              placeholder="Masukan Narasi"
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
                <Text style={{color: 'white'}}>PUBLISH</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            onPress={() => this.props.navigation.navigate('Peta')}
          />
          <Text style={styles.textHeader}>Peta</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.cameraContainer}>
            <ImageBackground
              style={styles.boxCamera}
              source={{
                uri:
                  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/5-Characters-Sanji-Can-Beat.jpg',
              }}>
              <TouchableNativeFeedback>
                <View style={styles.boxLiihat}>
                  <Text style={styles.textLihat}>Lihat Peta</Text>
                </View>
              </TouchableNativeFeedback>
            </ImageBackground>
          </View>
          <Text style={{marginHorizontal: 10, marginBottom: 5}}>
            Luas : 2500m2
          </Text>
          <Text style={{marginHorizontal: 10, marginBottom: 5}}>
            Status Hak : 2500m2
          </Text>
          <Text style={{marginHorizontal: 10, marginBottom: 5}}>
            Penggunaan Tanah : 2500m2
          </Text>
          <Text style={{marginHorizontal: 10, marginBottom: 5}}>
            Pemanfaatan Tanah : 2500m2
          </Text>
          <Text style={{marginHorizontal: 10, marginBottom: 10}}>
            RT/RW : 2500m2
          </Text>
          <View style={styles.boxContent}>
            <TouchableNativeFeedback
              onPress={() => this.setState({promosi: !this.state.promosi})}>
              <View
                style={{
                  ...styles.childBox,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffda77',
                  borderColor: 'white',
                }}
                placeholder="Masukan Deskripsi"
                textAlignVertical="top">
                <Text>PROMOSI</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          {this.promosi()}
        </ScrollView>
      </View>
    );
  }
}
export default PetaDetail;

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
    borderRadius: 5,
    borderColor: 'grey',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
  boxLiihat: {
    height: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffda77',
    margin: 10,
    borderRadius: 5,
  },
});
