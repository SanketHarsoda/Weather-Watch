import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './HomeScreenStyle';
import useHomeScreen from './useHomeScreen';
import {
  CustomLoader,
  ListEmptyComponent,
  WeeklyListItem,
} from '../../components';
import { Images } from '../../assets';
import { Colors } from '../../theme';

const HomeScreen = (): React.JSX.Element => {
  const {
    locationData,
    weatherData,
    weeklyForecast,
    weatherImage,
    handleSearchIconPress,
    showSearchBar,
    searchQuery,
    handleSearch,
    locations,
    onLocationItemPress,
    isLoading,
    unit,
    toggleUnit,
    convertTemperature,
  } = useHomeScreen();

  return (
    <SafeAreaView style={styles.rootContainerStyle} testID="home">
      <CustomLoader isVisible={isLoading} />
      {!isLoading && (
        <ScrollView
          style={styles.subContainerStyle}
          bounces={false}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}>
          <View style={styles.searchContainer}>
            {showSearchBar ? (
              <TextInput
                style={styles.searchInput}
                placeholder="Search location"
                placeholderTextColor={Colors.white}
                value={searchQuery}
                onChangeText={handleSearch}
              />
            ) : (
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>
                  Show temperature in {unit}
                </Text>
                <Switch
                  style={styles.switchStyle}
                  value={unit === 'Fahrenheit'}
                  onValueChange={toggleUnit}
                  thumbColor={Colors.white}
                  ios_backgroundColor={Colors.lightWhite}
                />
              </View>
            )}
            <TouchableOpacity
              onPress={handleSearchIconPress}
              activeOpacity={0.8}
              style={styles.searchIconContainerStyle}>
              <Image source={Images.search} style={styles.searchIconStyle} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={locations}
            keyExtractor={item => item?.id.toString()}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            style={styles.locationListStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={`item=${item?.id}`}
                style={styles.locationOption}
                onPress={() => onLocationItemPress(item)}>
                <Text style={styles.locationOptionText}>
                  {item?.name}, {item?.country}
                </Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              searchQuery?.length > 2 ? (
                <ListEmptyComponent title="No Location Found" />
              ) : null
            }
          />
          <View style={styles.locationContainer}>
            <Text
              style={
                styles.locationName
              }>{`${locationData?.name}, ${locationData?.country}`}</Text>
            {weatherImage?.image && (
              <View style={styles.weatherImageContainer}>
                <Image
                  source={{ uri: weatherImage?.image }}
                  style={styles.weatherImageStyle}
                />
              </View>
            )}
            <View style={styles.weatherStateContainer}>
              <View style={styles.degreeIconViewStyle}>
                <Text style={styles.currentTemp}>
                  {convertTemperature(String(weatherData?.current.temperature_2m?.toFixed()))}
                </Text>
                <View style={styles.degreeOuterViewStyle}>
                  <View style={styles.degreeInnerViewStyle} />
                </View>
                <Text style={styles.currentTemp}>
                  {unit === 'Fahrenheit' ? 'F' : 'C'}
                </Text>
              </View>
              <Text style={styles.currentWeatherDescStyle}>
                {weatherImage?.description}
              </Text>
            </View>
          </View>
          <View style={styles.weeklyListContainer}>
            <Text style={styles.titleTextStyle}>{'Daily forecast'}</Text>
            <FlatList
              horizontal
              data={weeklyForecast}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <WeeklyListItem item={{
                ...item,
                avgTemperature: convertTemperature(item.avgTemperature).toString(),
              }} />}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
