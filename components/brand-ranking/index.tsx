import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';

interface Brand {
  id: string;
  name: string;
  logo: string;
}

interface BrandRankingProps {
  brands: Brand[];
}

const BrandRanking = ({ brands }: BrandRankingProps) => (
  <FlatList
    data={brands}
    horizontal
    keyExtractor={item => item.id}
    renderItem={({ item, index }) => (
      <View style={styles.brandItem}>
        <Image source={{ uri: item.logo }} style={styles.logo} />
        <Text style={styles.rank}>{index + 1}위</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    )}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.container}
  />
);

export default BrandRanking; 