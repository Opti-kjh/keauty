import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from './types';
import styles from './styles';

const Button = ({ onPress, title, style, children, ...props }: ButtonProps & { children?: any }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...props}>
    <Text style={styles.text}>{title}</Text>
    {children}
  </TouchableOpacity>
);

export default Button; 