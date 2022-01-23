import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import ContactHeader from './contactHeader';
import ContactBody from './contactBody';
import {ContactsType, ContactsDataProps} from '../../index.d';
import {HEIGHT, WIDTH} from '../constants';

const Contacts = ({contactsData}: ContactsDataProps) => {
  const HeaderRef = React.useRef<FlatList>(null);
  const ContactsBodyRef = React.useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onScrollY = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = HEIGHT;
      const index = event.nativeEvent.contentOffset.y / slideSize;
      const roundIndex = Math.round(index);
      setCurrentIndex(roundIndex);
    },
    [],
  );

  const onScrollX = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = WIDTH;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      setCurrentIndex(roundIndex);
    },

    [],
  );
  React.useEffect(() => {
    ContactsBodyRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
      viewPosition: 0,
    });
    HeaderRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
      viewPosition: 0,
    });
  }, [currentIndex]);

  const getItemLayoutY = (data: any, index: number) => {
    return {
      length: styles.body.height,
      offset: styles.body.height * index,
      index,
    };
  };
  const getItemLayoutX = (data: any, index: number) => {
    return {
      length: styles.imageContainer.width,
      offset: styles.imageContainer.width * index,
      index,
    };
  };
  const renderContactHeader = ({item: contact, index}: ContactsType) => {
    if (!contact) {
      return null;
    }
    return (
      <ContactHeader
        {...{
          contact,
          index,
          currentIndex,
          onPress: () => setCurrentIndex(index),
        }}
      />
    );
  };

  const renderContactBody = ({item: contact, index}: ContactsType) => {
    if (!contact) {
      return null;
    }
    return <ContactBody {...{contact, index}} />;
  };

  return (
    <View style={styles.backgroundStyle}>
      <FlatList
        data={contactsData}
        showsHorizontalScrollIndicator={false}
        renderItem={renderContactHeader}
        horizontal
        keyExtractor={item => item.id}
        ref={HeaderRef}
        onMomentumScrollEnd={onScrollX}
        pagingEnabled={true}
        snapToInterval={WIDTH}
        bounces={false}
        getItemLayout={getItemLayoutX}
        viewabilityConfig={_viewabilityConfig}
        contentContainerStyle={styles.headerContentStyle}
        scrollEventThrottle={16}
        decelerationRate="fast"
      />
      <FlatList
        data={contactsData}
        showsVerticalScrollIndicator={false}
        renderItem={renderContactBody}
        keyExtractor={item => item.id}
        bounces={false}
        ref={ContactsBodyRef}
        onMomentumScrollEnd={onScrollY}
        snapToAlignment={'start'}
        snapToInterval={HEIGHT}
        getItemLayout={getItemLayoutY}
        scrollEventThrottle={16}
        decelerationRate="fast"
        viewabilityConfig={_viewabilityConfig}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  body: {
    alignSelf: 'center',
    height: HEIGHT,
    width: '90%',
  },
  headerContentStyle: {
    paddingVertical: 20,
    paddingHorizontal: 130,
    alignItems: 'center',
  },
  imageContainer: {
    width: WIDTH,
    height: 72,
    borderRadius: 100,
    justifyContent: 'center',
  },
});

export default Contacts;
