import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

interface Options {
  title?: string;
  storageOptions?: {
    skipBackup?: boolean;
    path?: string;
    mediaType?: string;
  };
  includeBase64?: boolean;
}

const User = () => {
  const [image, setImage] = useState(
    '/Users/radiumrocket31/projects/MyApp/react-native-with-typescript/assets/defaultUserImage.png',
  );

  const openGallery = () => {
    const options: Options = {
      title: 'Select image from',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('User cancel');
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  const openCamera = () => {
    const options: Options = {
      title: 'Select an image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      if (response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('User cancel');
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <Image style={styles.image} source={{uri: image}} />
      <View>
        <Button title="Take a picture" onPress={openCamera} />
        <Button title="Open Gallery" onPress={openGallery} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#19456B',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 200,
    borderColor: 'red',
  },
});

export default User;
