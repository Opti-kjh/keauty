import React from 'react';
import { View, Text } from 'react-native';
import SnsLinks from '../sns-links';
import styles from './styles';

interface Combo {
  id: string;
  title: string;
  desc: string;
}

interface ProductComboProps {
  combo: Combo;
  snsLinks: { type: string; url: string; icon: any }[];
}

const ProductCombo = ({ combo, snsLinks }: ProductComboProps) => (
  <View style={styles.card}>
    <Text style={styles.comboTitle}>{combo.title}</Text>
    <Text style={styles.comboDesc}>{combo.desc}</Text>
    <SnsLinks links={snsLinks} />
  </View>
);

export default ProductCombo; 