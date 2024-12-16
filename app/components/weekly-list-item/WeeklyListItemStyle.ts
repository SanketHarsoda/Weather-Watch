import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootViewStyle: {
    alignItems: 'center',
    backgroundColor: Colors.lightWhite,
    borderRadius: moderateScale(15),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(8)
  },
  imageViewStyle: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(35),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  timeTextStyle: {
    fontSize: moderateScale(14),
    color: Colors.offWhite,
  },
  degreeTextStyle: {
    fontSize: moderateScale(15),
    color: Colors.white,
    fontWeight: 'bold',
  },
  degreeIconViewStyle: {
    flexDirection: 'row',
  },
  degreeOuterViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(3),
    marginLeft: horizontalScale(1),
    height: moderateScale(8),
    width: moderateScale(8),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(4),
  },
  degreeInnerViewStyle: {
    height: moderateScale(4),
    width: moderateScale(4),
    backgroundColor: Colors.lightWhite,
    borderRadius: moderateScale(2),
  },
});
