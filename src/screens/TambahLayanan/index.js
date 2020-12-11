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

class TambahLayanan extends React.Component {
  state = {
    icon: true,
    promosi: false,
  };

  iconRender = () => {
    if (this.state.icon) {
      return (
        <Icon
          name="plus"
          size={20}
          onPress={() => this.setState({icon: !this.state.icon})}
        />
      );
    } else {
      return (
        <Icon
          name="minus"
          size={20}
          onPress={() => this.setState({icon: !this.state.icon})}
        />
      );
    }
  };

  accordion = () => {
    if (this.state.icon) {
      return false;
    } else {
      return (
        <View style={styles.persyaratanContentBox2}>
          <Text style={{marginBottom: 10}}>
            Persyaratan yang harus dibawa :{'\n'}1.KTP{'\n'}2.Formulir isian
          </Text>
          <Text>
            Alur layanan :{'\n'}1.Pengisian form{'\n'}2.Ambil surat di kantor
            desa
          </Text>
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
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.textHeader}>Layanan</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.boxTitle}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Surat Keterangan Domisili
            </Text>
          </View>
          <View style={styles.boxTitle2}>
            <View style={styles.persyaratanContent}>
              <View style={styles.persyaratanContentBox}>
                <Text style={styles.textPersyaratan}>Persyaratan dan Alur</Text>
                {this.iconRender()}
              </View>
              {this.accordion()}
            </View>
          </View>
          <Text style={{padding: 10}}>
            Silahkan lengkapi isian di bawah ini
          </Text>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Nama Lengkap</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Tempat/ Tanggal Lahir</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Jenis Kelamin</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Agama</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Pekerjaan</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Alamat</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Keperluan</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxLogout}>
            <TouchableNativeFeedback>
              <View style={styles.buttonLogout}>
                <Text style={styles.textButtonLogout}>SUBMIT</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default TambahLayanan;

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
  boxTitle: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  boxTitle2: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  boxInput: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  childBoxInput: {
    width: '100%',
  },
  label: {
    marginBottom: 5,
    color: 'grey',
  },
  textInput: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  boxButton: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textButton: {
    color: 'white',
  },
  button: {
    height: 45,
    width: '90%',
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: '#19D2BA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLogout: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogout: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19D2BA',
    borderRadius: 5,
    elevation: 5,
  },
  textButtonLogout: {
    color: 'white',
  },
  persyaratanContent: {
    width: '100%',
    padding: 5,
    backgroundColor: '#ffeab1',
    borderRadius: 5,
  },
  persyaratanContentBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  persyaratanContentBox2: {
    width: '100%',
    padding: 10,
  },
  textPersyaratan: {
    fontWeight: 'bold',
  },
});
