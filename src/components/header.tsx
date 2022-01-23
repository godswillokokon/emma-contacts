import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}: {title: string}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'center',
    height: 50,
  },
  title: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 22,
  },
});

export default Header;
