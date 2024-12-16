import React from 'react';
import { Image, Text, View } from 'react-native';
import { WeeklyWeatherItem } from '../../types';
import { styles } from './WeeklyListItemStyle';

const WeeklyListItem = ({
  item
}: {
  item: WeeklyWeatherItem;
}): React.JSX.Element => {

  return (
    <View style={styles.rootViewStyle}>
      <Text style={styles.timeTextStyle}>{item?.date}</Text>
      <View style={styles.imageViewStyle}>
        {item?.weatherIcon?.image && (
          <Image
            testID="cloud-image"
            style={styles.imageStyle}
            source={{
              uri: item?.weatherIcon?.image,
            }}
          />
        )}
      </View>
      <View style={styles.degreeIconViewStyle}>
        <Text style={styles.degreeTextStyle}>{item?.avgTemperature}</Text>
        <View style={styles.degreeOuterViewStyle}>
          <View style={styles.degreeInnerViewStyle} />
        </View>
      </View>
    </View>
  );
};

export default WeeklyListItem;
