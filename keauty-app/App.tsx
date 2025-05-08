import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

// 연령대별 랭킹 데이터 예시
const rankingData = [
  {
    ageGroup: '10대',
    items: [
      { rank: 1, brand: '브랜드A', name: '틴트', image: 'https://via.placeholder.com/60', desc: '생기있는 입술 표현' },
      { rank: 2, brand: '브랜드B', name: '쿠션', image: 'https://via.placeholder.com/60', desc: '촉촉한 피부 연출' },
      { rank: 3, brand: '브랜드C', name: '마스카라', image: 'https://via.placeholder.com/60', desc: '롱래쉬 효과' },
      { rank: 4, brand: '브랜드D', name: '아이섀도우', image: 'https://via.placeholder.com/60', desc: '트렌디한 컬러' },
      { rank: 5, brand: '브랜드E', name: '선크림', image: 'https://via.placeholder.com/60', desc: '자외선 차단' },
    ],
  },
  {
    ageGroup: '20대',
    items: [
      { rank: 1, brand: '브랜드F', name: '파운데이션', image: 'https://via.placeholder.com/60', desc: '매끈한 피부' },
      { rank: 2, brand: '브랜드G', name: '립스틱', image: 'https://via.placeholder.com/60', desc: '선명한 컬러' },
      { rank: 3, brand: '브랜드H', name: '블러셔', image: 'https://via.placeholder.com/60', desc: '자연스러운 혈색' },
      { rank: 4, brand: '브랜드I', name: '마스크팩', image: 'https://via.placeholder.com/60', desc: '집중 보습' },
      { rank: 5, brand: '브랜드J', name: '아이라이너', image: 'https://via.placeholder.com/60', desc: '또렷한 눈매' },
    ],
  },
  // ... 30대, 40대, 50대 데이터 추가 가능
];

// 연령대별 조합 랭킹 데이터 예시
const comboRankingData = [
  {
    ageGroup: '10대',
    combos: [
      { rank: 1, items: ['틴트', '쿠션', '마스카라'], desc: '10대 인기 조합', image: 'https://via.placeholder.com/80' },
      { rank: 2, items: ['아이섀도우', '선크림'], desc: '자연스러운 메이크업', image: 'https://via.placeholder.com/80' },
    ],
  },
  {
    ageGroup: '20대',
    combos: [
      { rank: 1, items: ['파운데이션', '립스틱', '블러셔'], desc: '20대 베스트 조합', image: 'https://via.placeholder.com/80' },
      { rank: 2, items: ['마스크팩', '아이라이너'], desc: '피부+포인트 메이크업', image: 'https://via.placeholder.com/80' },
    ],
  },
  // ... 30대, 40대, 50대 데이터 추가 가능
];

type RankingItemType = {
  rank: number;
  brand: string;
  name: string;
  image: string;
  desc: string;
};

type ComboRankingType = {
  rank: number;
  items: string[];
  desc: string;
  image: string;
};

type RankingSectionProps = {
  ageGroup: string;
  items: RankingItemType[];
};

type ComboRankingSectionProps = {
  ageGroup: string;
  combos: ComboRankingType[];
};

// TopBar 컴포넌트
function TopBar() {
  return (
    <View style={styles.topBar}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 6 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="어떤 제품을 찾으시나요?"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.topIcons}>
        <Feather name="bell" size={22} color="#222" style={{ marginRight: 16 }} />
        <Ionicons name="person-circle-outline" size={28} color="#222" />
      </View>
    </View>
  );
}

// PromotionBanner 컴포넌트
function PromotionBanner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>최대 15% 할인받고, 인기 K-뷰티 제품을 만나보세요</Text>
      <Text style={styles.bannerDesc}>한국 인기 브랜드의 화장품을 특별 할인과 함께 만나보세요. 5월 한정 쿠폰도 놓치지 마세요.</Text>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' }} style={styles.bannerImage} />
      <View style={styles.bannerLabel}><Text style={styles.bannerLabelText}>한정할인</Text></View>
    </View>
  );
}

type RankingCardProps = {
  image: string;
  label: string;
  title: string;
  desc: string;
  price?: string;
  discount?: string;
  bookmark: boolean;
};

function RankingCard({ image, label, title, desc, price, discount, bookmark }: RankingCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      {label && <View style={styles.cardLabel}><Text style={styles.cardLabelText}>{label}</Text></View>}
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Feather name={bookmark ? 'bookmark' : 'bookmark'} size={22} color={bookmark ? '#ff69b4' : '#fff'} />
      </TouchableOpacity>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{desc}</Text>
        {price && (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            {discount && <Text style={styles.cardDiscount}>{discount}</Text>}
            <Text style={styles.cardPrice}>{price}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

type RankingCardListProps = {
  title: string;
  data: any[];
  isCombo: boolean;
};

function RankingCardList({ title, data, isCombo }: RankingCardListProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item: any, idx: number) => (
          <RankingCard
            key={idx}
            image={item.image || 'https://via.placeholder.com/120'}
            label={isCombo ? `조합 ${item.rank}` : `TOP ${item.rank}`}
            title={isCombo ? item.items.join(', ') : `${item.brand} ${item.name}`}
            desc={item.desc}
            price={undefined}
            discount={undefined}
            bookmark={false}
          />
        ))}
      </ScrollView>
    </View>
  );
}

// BottomTabBar 컴포넌트
function BottomTabBar() {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}><Ionicons name="home" size={24} color="#222" /><Text style={styles.tabLabel}>홈</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><Ionicons name="search" size={24} color="#888" /><Text style={styles.tabLabel}>탐색</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><Feather name="percent" size={24} color="#888" /><Text style={styles.tabLabel}>프로모션</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><Feather name="bookmark" size={24} color="#888" /><Text style={styles.tabLabel}>북마크</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><MaterialCommunityIcons name="message-outline" size={24} color="#888" /><Text style={styles.tabLabel}>메시지</Text></TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="dark" />
      <TopBar />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <PromotionBanner />
        {rankingData.map(section => (
          <RankingCardList key={section.ageGroup} title={`${section.ageGroup} 랭킹 TOP 5`} data={section.items} isCombo={false} />
        ))}
        {comboRankingData.map(section => (
          <RankingCardList key={section.ageGroup} title={`${section.ageGroup} 조합 랭킹`} data={section.combos} isCombo={true} />
        ))}
      </ScrollView>
      <BottomTabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    zIndex: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f7',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 38,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  banner: {
    margin: 16,
    backgroundColor: '#f7faff',
    borderRadius: 16,
    padding: 18,
    position: 'relative',
    overflow: 'hidden',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },
  bannerDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
  },
  bannerLabel: {
    position: 'absolute',
    top: 18,
    left: 18,
    backgroundColor: '#2196f3',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  bannerLabelText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
    color: '#222',
  },
  card: {
    width: 180,
    marginLeft: 16,
    marginRight: 4,
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 4,
  },
  cardImage: {
    width: '100%',
    height: 110,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  cardLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#2196f3',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 2,
  },
  cardLabelText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 12,
    padding: 2,
  },
  cardInfo: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  cardDiscount: {
    color: '#2196f3',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 6,
  },
  cardPrice: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: '#222',
    marginTop: 2,
  },
});
