import React from 'react';
import { ScrollView, View } from 'react-native';
import BrandRanking from '../../components/brand-ranking';
import ProductCombo from '../../components/product-combo';
import styles from './styles';

const brands = [
  { id: '1', name: '라네즈', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Laneige_logo.png' },
  { id: '2', name: '샤넬', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Chanel_logo_interlocking_cs.svg' },
  { id: '3', name: '이니스프리', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Innisfree_logo.png' },
];

const combos = [
  {
    id: 'c1',
    title: '라네즈 워터뱅크 + 샤넬 립밤',
    desc: '촉촉함과 고급스러움을 동시에! SNS에서 인기 조합',
    snsLinks: [
      { type: 'instagram', url: 'https://instagram.com', icon: require('../../assets/instagram.png') },
      { type: 'tiktok', url: 'https://tiktok.com', icon: require('../../assets/tiktok.png') },
      { type: 'twitter', url: 'https://twitter.com', icon: require('../../assets/twitter.png') },
    ],
  },
  {
    id: 'c2',
    title: '이니스프리 그린티 + 라네즈 슬리핑팩',
    desc: '피부 진정과 보습을 한 번에! 틱톡에서 화제',
    snsLinks: [
      { type: 'instagram', url: 'https://instagram.com', icon: require('../../assets/instagram.png') },
      { type: 'tiktok', url: 'https://tiktok.com', icon: require('../../assets/tiktok.png') },
    ],
  },
];

const Home = () => (
  <ScrollView style={styles.container}>
    <BrandRanking brands={brands} />
    {combos.map(combo => (
      <ProductCombo key={combo.id} combo={combo} snsLinks={combo.snsLinks} />
    ))}
  </ScrollView>
);

export default Home; 