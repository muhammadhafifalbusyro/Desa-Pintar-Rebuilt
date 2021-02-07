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

class Layanan extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Layanan</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <Text style={styles.teks}>
            Silahkan cari layanan yang anda butuhkan :
          </Text>
          <View style={styles.contentContainer}>
            <View style={styles.boxContentSearch}>
              <TextInput placeholder="Cari Layanan" style={{width: '85%'}} />
              <Icon name="search" size={20} color="grey" />
            </View>
          </View>
          <View style={styles.boxContainer}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('DetailLayanan')}>
              <View style={{...styles.boxContent, backgroundColor: '#ffda77'}}>
                <Text style={styles.text1}>Kependudukan</Text>
                <Icon name="search" size={20} color="grey" />
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxContent}>
              <Text style={styles.text1}>Perizinan</Text>
              <Icon name="search" size={20} color="grey" />
            </View>
          </View>
          <View style={styles.boxContainer}>
            <View style={{...styles.boxContent, backgroundColor: '#aee6e6'}}>
              <Text style={styles.text1}>Pendidikan</Text>
              <Icon name="search" size={20} color="grey" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Layanan;

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
  teks: {
    marginTop: 5,
    padding: 10,
    fontWeight: 'bold',
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
  boxContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    height: 100,
    width: '100%',
    backgroundColor: 'orange',
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
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
