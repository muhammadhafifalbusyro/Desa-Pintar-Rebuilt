import React from 'react';
import MainNavigator from './src/navigation';

class App extends React.Component {
  render() {
    console.log('hello');
    return <MainNavigator />;
  }
}
export default App;

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Platform,
//   SafeAreaView,
//   Button,
// } from 'react-native';

// import ImagePicker from 'react-native-image-picker';
// const options = {
//   title: 'Select Avatar',
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

// export default class App extends React.Component {
//   state = {
//     avatarSource: '',
//     fileName: '',
//     type: '',
//     uri: '',
//     fileSize: '',
//   };
//   pickerImage = () => {
//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = {uri: response.uri};
//         const fileName = response.fileName;
//         const type = response.type;
//         const uri = response.uri;
//         const fileSize = response.fileSize;

//         this.setState({
//           avatarSource: source,
//           fileName: fileName,
//           type: type,
//           uri: uri,
//           fileSize: fileSize,
//         });
//       }
//     });
//   };
//   render() {
//     return (
//       <View>
//         <Button title="klik" onPress={() => this.pickerImage()} />
//       </View>
//     );
//   }
// }
