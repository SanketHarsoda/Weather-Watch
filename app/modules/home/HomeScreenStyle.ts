import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  subContainerStyle: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    flex: 1
  },
  searchIconContainerStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
    backgroundColor: Colors.lightWhite,
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconStyle: {
    height: '50%',
    width: '50%',
    tintColor: Colors.white
  },
  locationContainer: {
    marginTop: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationName: {
    fontSize: moderateScale(30),
    color: Colors.white,
    fontWeight: '600'
  },
  currentDate: {
    fontSize: moderateScale(20),
    color: Colors.white,
  },
  weatherStateContainer: {
    alignItems: 'center',
    justifyContent: "center"
  },
  currentTemp: {
    fontSize: moderateScale(60),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30)
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
  },
  degreeInnerViewStyle: {
    height: moderateScale(10),
    width: moderateScale(10),
    backgroundColor: Colors.green,
    borderRadius: moderateScale(5),
  },
  weatherImageContainer: {
    marginTop: verticalScale(10),
    height: moderateScale(200),
    width: moderateScale(200),
  },
  weatherImageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  currentWeatherDescStyle: {
    fontSize: moderateScale(22),
    color: Colors.white,
    fontWeight: '500'
  },
  searchBarContainer: {
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(4),
    flex: 1,
  },
  emptyView: {
    flex: 1,
    height: moderateScale(50)
  },
  searchInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.offWhite,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(10),
    marginEnd: horizontalScale(10),
    fontSize: moderateScale(16),
    color: Colors.white,
    flex: 1
  },
  locationOption: {
    padding: verticalScale(10),
    borderRadius: moderateScale(5),
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 3
  },
  locationOptionText: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },
  locationListStyle: {
    maxHeight: verticalScale(200),
  },
  titleTextStyle: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(10),
    fontWeight: '700',
    color: Colors.white,
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  weeklyListContainer: {
    marginTop: verticalScale(50)
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  switchLabel: {
    fontSize: 16,
    color: Colors.white,
  },
  switchStyle: { marginLeft: horizontalScale(10) }
});
