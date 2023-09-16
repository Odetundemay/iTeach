import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import colors from '../constants/colors';

type PageContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const PageContainer: React.FC<PageContainerProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
});

export default PageContainer;
