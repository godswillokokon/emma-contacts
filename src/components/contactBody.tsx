import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ContactsBodyType} from '../../index.d';
import {HEIGHT} from '../constants';

const ContactBody = ({contact}: ContactsBodyType) => {
  const {firstName, lastName, job, about} = contact;
  return (
    <View style={styles.body}>
      <View style={styles.name}>
        <Text style={styles.firstname}>{firstName}</Text>
        <Text style={styles.lastname}>{lastName}</Text>
      </View>
      <Text style={styles.job}>{job}</Text>
      <View style={styles.aboutBody}>
        <Text style={styles.aboutTitle}>About me</Text>
        <Text style={styles.about}>{about}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  about: {
    fontSize: 16,
    color: 'grey',
    paddingVertical: 5,
    textAlign: 'left',
    alignSelf: 'center',
  },
  aboutBody: {
    marginVertical: 22,
    flex: 1,
  },
  aboutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  body: {
    alignSelf: 'center',
    height: HEIGHT,
    width: '90%',
  },
  job: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'grey',
  },
  name: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 5,
  },
  firstname: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 2.5,
  },
  lastname: {
    fontSize: 20,
    paddingHorizontal: 2.5,
  },
});

export default ContactBody;
