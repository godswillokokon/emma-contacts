import React from 'react';
import {View, StyleSheet} from 'react-native';
import Contacts from './contacts';
import Header from './header';
import {MainDataProps} from '../../index.d';

const Main = ({contactsData, title}: MainDataProps) => {
  return (
    <View style={styles.backgroundStyle}>
      <Header title={title} />
      <Contacts contactsData={contactsData} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default Main;
