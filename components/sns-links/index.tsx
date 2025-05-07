import React from 'react';
import { View, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './styles';

interface SnsLink {
  type: string;
  url: string;
  icon: any;
}

interface SnsLinksProps {
  links: SnsLink[];
}

const SnsLinks = ({ links }: SnsLinksProps) => (
  <View style={styles.snsRow}>
    {links.map(link => (
      <TouchableOpacity key={link.type} onPress={() => Linking.openURL(link.url)} style={styles.snsBtn}>
        <Image source={link.icon} style={styles.snsIcon} />
      </TouchableOpacity>
    ))}
  </View>
);

export default SnsLinks; 