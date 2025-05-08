import './i18n';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/app';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

// TopBar 컴포넌트 (토글 방식)
function TopBar({ t, lang, onToggleLang }: { t: any; lang: string; onToggleLang: () => void }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <View style={[styles.topBar, searchActive && styles.topBarSearchActive]}>
      {searchActive ? (
        <View style={styles.searchBarActive}>
          <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.searchInputActive}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor="#888"
            autoFocus
          />
          <TouchableOpacity onPress={() => setSearchActive(false)} style={{ marginLeft: 8 }}>
            <Feather name="x" size={22} color="#222" />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.logoText}>Keauty</Text>
          <View style={styles.topIcons}>
            <TouchableOpacity onPress={() => setSearchActive(true)}>
              <Ionicons name="search" size={22} color="#222" style={{ marginRight: 18 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="bell" size={22} color="#222" style={{ marginRight: 18 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="person-circle-outline" size={28} color="#222" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onToggleLang} style={{ marginLeft: 12, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, backgroundColor: '#f2f2f2' }}>
              <Text style={{ color: '#222', fontWeight: 'bold' }}>{lang === 'ko' ? 'EN' : 'KO'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

// PromotionBanner 컴포넌트
function PromotionBanner({ t }: { t: any }) {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>{t('promotionTitle')}</Text>
      <Text style={styles.bannerDesc}>{t('promotionDesc')}</Text>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80' }} style={styles.bannerImage} />
      <View style={styles.bannerLabel}><Text style={styles.bannerLabelText}>{t('promotionLabel')}</Text></View>
    </View>
  );
}

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
  t: any;
};

function RankingCardList({ title, data, isCombo, t }: RankingCardListProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item: any, idx: number) => (
          <RankingCard
            key={idx}
            image={item.image || 'https://via.placeholder.com/120'}
            label={isCombo ? t('comboLabel', { rank: item.rank }) : t('topLabel', { rank: item.rank })}
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
function BottomTabBar({ t }: { t: any }) {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}><Ionicons name="home" size={24} color="#222" /><Text style={styles.tabLabel}>{t('home')}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><Ionicons name="search" size={24} color="#888" /><Text style={styles.tabLabel}>{t('search')}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><Feather name="percent" size={24} color="#888" /><Text style={styles.tabLabel}>{t('promotion')}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><Feather name="bookmark" size={24} color="#888" /><Text style={styles.tabLabel}>{t('bookmark')}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}><MaterialCommunityIcons name="message-outline" size={24} color="#888" /><Text style={styles.tabLabel}>{t('message')}</Text></TouchableOpacity>
    </View>
  );
}

function SafeTopBar({ t, lang, onToggleLang }: { t: any; lang: string; onToggleLang: () => void }) {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#fff' }}>
      <View style={styles.topBar}>
        <TopBar t={t} lang={lang} onToggleLang={onToggleLang} />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState('ko');
  const handleToggleLang = () => {
    const nextLang = lang === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(nextLang);
    setLang(nextLang);
  };

  // 데이터 객체는 반드시 함수 내부에서 생성
  const rankingData = [
    {
      ageGroup: '10s',
      items: [
        { rank: 1, brand: t('brand.A'), name: t('product.tint'), image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', desc: t('desc.lively_lip') },
        { rank: 2, brand: t('brand.B'), name: t('product.cushion'), image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: t('desc.moist_skin') },
        { rank: 3, brand: t('brand.C'), name: t('product.mascara'), image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: t('desc.longlash') },
        { rank: 4, brand: t('brand.D'), name: t('product.eyeshadow'), image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', desc: t('desc.trendy_color') },
        { rank: 5, brand: t('brand.E'), name: t('product.suncream'), image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', desc: t('desc.uv_block') },
      ],
    },
    {
      ageGroup: '20s',
      items: [
        { rank: 1, brand: t('brand.F'), name: t('product.foundation'), image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: t('desc.smooth_skin') },
        { rank: 2, brand: t('brand.G'), name: t('product.lipstick'), image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', desc: t('desc.vivid_color') },
        { rank: 3, brand: t('brand.H'), name: t('product.blusher'), image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: t('desc.natural_blood') },
        { rank: 4, brand: t('brand.I'), name: t('product.maskpack'), image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: t('desc.intensive_moisture') },
        { rank: 5, brand: t('brand.J'), name: t('product.eyeliner'), image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', desc: t('desc.clear_eyes') },
      ],
    },
  ];

  const comboRankingData = [
    {
      ageGroup: '10s',
      combos: [
        { rank: 1, items: [t('product.tint'), t('product.cushion'), t('product.mascara')], desc: t('combo.10s_1'), image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
        { rank: 2, items: [t('product.eyeshadow'), t('product.suncream')], desc: t('combo.10s_2'), image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
      ],
    },
    {
      ageGroup: '20s',
      combos: [
        { rank: 1, items: [t('product.foundation'), t('product.lipstick'), t('product.blusher')], desc: t('combo.20s_1'), image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
        { rank: 2, items: [t('product.maskpack'), t('product.eyeliner')], desc: t('combo.20s_2'), image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
      ],
    },
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <View style={styles.safeArea}>
        <SafeTopBar t={t} lang={lang} onToggleLang={handleToggleLang} />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <PromotionBanner t={t} />
          {rankingData.map(section => (
            <RankingCardList key={section.ageGroup} title={t('rankingTitle', { ageGroup: t(`ageGroup.${section.ageGroup}`) })} data={section.items} isCombo={false} t={t} />
          ))}
          {comboRankingData.map(section => (
            <RankingCardList key={section.ageGroup} title={t('comboRankingTitle', { ageGroup: t(`ageGroup.${section.ageGroup}`) })} data={section.combos} isCombo={true} t={t} />
          ))}
        </ScrollView>
        <BottomTabBar t={t} />
        <StatusBar style="dark" />
      </View>
    </I18nextProvider>
  );
}
