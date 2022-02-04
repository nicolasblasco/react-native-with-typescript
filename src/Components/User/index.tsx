import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const User = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
      <Button
        title="Gallery"
        onPress={async () => {
          const options = {
            title: 'Gallery',
            customButtons: [{name: 'fb', title: 'Facebook'}],
            cancelButton: 'Cancel',
            takePhotoButtonTitle: 'Take a picture',
            chooseFromLibraryButtonTitle: 'Open Gallery',
            noData: true,
          };
          await launchImageLibrary(options, (res: any) => {
            console.log({res});
          });
          // imagePicker.launchCamera();
          // imagePicker.launchImageLibrary();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});

export default User;
