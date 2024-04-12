import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import Listings from './Listings';

interface Props {
  listings: [];
}

// Bottom sheet that wraps our Listings component
const ListingsBottomSheet = ({ listings }: Props) => {
  const snapPoints = useMemo(() => ['22%', '100%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const onShowMap = () => {
    bottomSheetRef.current?.collapse();  
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      style={styles.sheetContainer}>
      <View style={styles.contentContainer}>
        <Listings listings={listings} />
        <View style={styles.absoluteView}>
          <TouchableOpacity onPress={onShowMap} style={styles.btn}>
            <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#fff' }}>Map</Text>
            <Ionicons name="map" size={20} style={{ marginLeft: 10 }} color={'#fff'} />
          </TouchableOpacity>
        </View>       
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: "absolute",
    bottom: 200,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingsBottomSheet;