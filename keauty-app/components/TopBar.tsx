import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from '../styles/app';

interface TopBarProps {
  t: any;
  lang: string;
  onChangeLang: (lang: string) => void;
}

const LANGUAGES = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
];

export default function TopBar({ t, lang, onChangeLang }: TopBarProps) {
  const [searchActive, setSearchActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const currentLangLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;

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
            <View style={{ marginLeft: 8, minWidth: 100 }}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 6,
                  backgroundColor: '#f2f2f2',
                  minWidth: 80,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: '#222', fontWeight: 'bold', fontSize: 13 }}>{currentLangLabel}</Text>
              </TouchableOpacity>
              <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
              >
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}
                  activeOpacity={1}
                  onPressOut={() => setModalVisible(false)}
                >
                  <View style={{
                    position: 'absolute',
                    top: Platform.OS === 'ios' ? 60 : 50,
                    right: 16,
                    left: 16,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingVertical: 8,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 4,
                  }}>
                    {LANGUAGES.map(l => (
                      <TouchableOpacity
                        key={l.code}
                        onPress={() => {
                          onChangeLang(l.code);
                          setModalVisible(false);
                        }}
                        style={{
                          paddingVertical: 12,
                          paddingHorizontal: 16,
                          backgroundColor: lang === l.code ? '#f2f2f2' : 'transparent',
                        }}
                      >
                        <Text style={{ color: '#222', fontWeight: lang === l.code ? 'bold' : 'normal', fontSize: 15 }}>{l.label}</Text>
                      </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ padding: 12, alignItems: 'center' }}>
                      <Text style={{ color: '#888', fontSize: 14 }}>취소</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Modal>
            </View>
          </View>
        </>
      )}
    </View>
  );
} 