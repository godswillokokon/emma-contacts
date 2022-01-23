import {ImageSourcePropType} from 'react-native';

export interface ContactType {
  id: string;
  firstName: string;
  lastName: string;
  job: string;
  about: string;
  image: ImageSourcePropType;
}
export interface ContactsDataProps {
  contactsData: ContactType[];
}
export interface MainDataProps {
  contactsData: ContactType[];
  title: string;
}
export type ContactsType = {
  item: ContactType;
  index: number;
};

export type ContactsBodyType = {
  contact: ContactType;
};

export type HeaderType = {
  contact: ContactType;
  index: number;
  onPress: () => void;
  currentIndex: number;
};
