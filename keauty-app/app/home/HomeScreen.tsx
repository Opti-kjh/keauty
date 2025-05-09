import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/app';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import TopBar from '../../components/TopBar';
import SafeTopBar from '../../components/SafeTopBar';

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

export default function HomeScreen() {
  const { t } = useTranslation();
  const handleChangeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

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
    <View style={styles.safeArea}>
      <SafeTopBar t={t} lang={i18n.language} onChangeLang={handleChangeLang} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <PromotionBanner t={t} />
        {rankingData.map(section => (
          <RankingCardList key={section.ageGroup} title={t('rankingTitle', { ageGroup: t(`ageGroup.${section.ageGroup}`) })} data={section.items} isCombo={false} t={t} />
        ))}
        {comboRankingData.map(section => (
          <RankingCardList key={section.ageGroup} title={t('comboRankingTitle', { ageGroup: t(`ageGroup.${section.ageGroup}`) })} data={section.combos} isCombo={true} t={t} />
        ))}
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
} 