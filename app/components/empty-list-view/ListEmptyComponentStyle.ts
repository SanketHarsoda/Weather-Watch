import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';


export const styles = StyleSheet.create({
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyTextStyle: {
    fontSize: moderateScale(18),
    color: Colors.white
  },
});
