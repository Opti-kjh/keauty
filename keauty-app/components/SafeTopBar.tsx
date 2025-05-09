import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import TopBar from './TopBar';
import styles from '../styles/app';

interface SafeTopBarProps {
  t: any;
  lang: string;
  onChangeLang: (lang: string) => void;
}

export default function SafeTopBar({ t, lang, onChangeLang }: SafeTopBarProps) {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#fff' }}>
      <View style={styles.topBar}>
        <TopBar t={t} lang={lang} onChangeLang={onChangeLang} />
      </View>
    </SafeAreaView>
  );
} 