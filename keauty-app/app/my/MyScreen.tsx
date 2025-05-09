import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import SafeTopBar from '../../components/SafeTopBar';
import styles from '../../styles/app';

export default function MyScreen() {
  const { t } = useTranslation();
  const handleChangeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  const dummyProfile = {
    name: t('my.profile.name'),
    email: t('my.profile.email'),
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  const bookmarkedProducts = [
    { id: '1', title: t('product.tint'), desc: t('desc.lively_lip'), image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
    { id: '2', title: t('product.cushion'), desc: t('desc.moist_skin'), image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  ];

  const bookmarkedCombos = [
    { id: '1', items: [t('product.tint'), t('product.cushion'), t('product.mascara')], desc: t('combo.10s_1'), image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
    { id: '2', items: [t('product.foundation'), t('product.lipstick'), t('product.blusher')], desc: t('combo.20s_1'), image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <View style={styles.safeArea}>
      <SafeTopBar t={t} lang={i18n.language} onChangeLang={handleChangeLang} />
      <View style={styles.profileSection}>
        <Image source={{ uri: dummyProfile.avatar }} style={styles.profileAvatar} />
        <Text style={styles.profileName}>{dummyProfile.name}</Text>
        <Text style={styles.profileEmail}>{dummyProfile.email}</Text>
      </View>
      <View style={styles.bookmarkSection}>
        <Text style={styles.sectionTitle}>{t('my.bookmarksProducts')}</Text>
        <FlatList
          data={bookmarkedProducts}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.bookmarkSection}>
        <Text style={styles.sectionTitle}>{t('my.bookmarksCombos')}</Text>
        <FlatList
          data={bookmarkedCombos}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.items.join(', ')}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
} 