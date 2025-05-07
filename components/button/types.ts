import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
} 