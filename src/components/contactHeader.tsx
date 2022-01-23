import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {HeaderType} from '../../index.d';
import {WIDTH, IMAGE_WIDTH} from '../constants';

const ContactHeader = ({contact, onPress, currentIndex, index}: HeaderType) => {
  const {image} = contact;
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={index === currentIndex ? styles.active : null} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: WIDTH,
    height: 72,
    borderRadius: 100,
    justifyContent: 'center',
  },
  active: {
    width: 85,
    height: 78,
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#e1e8ff',
    alignSelf: 'center',
    zIndex: -1,
  },
  image: {
    width: IMAGE_WIDTH,
    height: 70,
    borderRadius: 100,
    alignSelf: 'center',
  },
});

export default ContactHeader;
