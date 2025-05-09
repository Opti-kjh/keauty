import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import SafeTopBar from '../../components/SafeTopBar';
import styles from '../../styles/app';

export default function PromotionScreen() {
  const { t } = useTranslation();
  const handleChangeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };
  return (
    <View style={styles.safeArea}>
      <SafeTopBar t={t} lang={i18n.language} onChangeLang={handleChangeLang} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{t('promotion.screen')}</Text>
      </View>
    </View>
  );
} 