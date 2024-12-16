import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ListEmptyComponentStyle';

const ListEmptyComponent = ({title}: {title?: string}) => {
  return (
    <View style={styles.listEmptyContainer}>
      <Text style={styles.listEmptyTextStyle}>{title ?? 'No Data Found'}</Text>
    </View>
  );
};

export default ListEmptyComponent;
