import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import { colors } from '../styles/colors';

const donationCards = [
  {
    id: '1',
    title: 'Support Families in Need',
    description: 'Help provide essential supplies and support to families facing hardships in our community.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    title: 'Feed the Hungry',
    description: 'Provide nutritious meals to those experiencing food insecurity in local communities.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    title: 'School Supplies Drive',
    description: 'Support students with notebooks, pencils, and school essentials for the coming school year.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const filteredCards = useMemo(
    () => donationCards.filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.brandRow}>
          <View style={styles.logoBadge} />
          <Text style={styles.brandText}>Hopecard</Text>
        </View>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredCards}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        ListHeaderComponent={
          <View style={styles.headerSection}>
            <Text style={styles.heading}>Browse Donation Cards</Text>
            <Text style={styles.subheading}>Support meaningful causes and make an impact in different communities</Text>
            <View style={styles.searchBox}>
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.searchInput}
                placeholder="Search for donation cards"
                placeholderTextColor="#8F9BB0"
              />
            </View>
            <Text style={styles.countText}>{filteredCards.length} Cards found</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Transactions')}>
          <Text style={styles.navLabel}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={menuVisible} animationType="fade" onRequestClose={() => setMenuVisible(false)}>
        <TouchableOpacity style={styles.menuOverlay} activeOpacity={1} onPress={() => setMenuVisible(false)}>
          <TouchableOpacity activeOpacity={1} style={styles.menuPanel}>
            <View style={styles.menuTopRow}>
              <Text style={styles.menuTitle}>Menu</Text>
              <TouchableOpacity onPress={() => setMenuVisible(false)}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Profile');
              }}
            >
              <Text style={styles.menuItemIcon}>◌</Text>
              <Text style={styles.menuItemText}>User Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Transactions');
              }}
            >
              <Text style={styles.menuItemIcon}>▭</Text>
              <Text style={styles.menuItemText}>Transactions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Settings');
              }}
            >
              <Text style={styles.menuItemIcon}>⚙</Text>
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  topBar: {
    backgroundColor: '#D98888',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBadge: {
    width: 18,
    height: 18,
    backgroundColor: '#E9B7B7',
    borderRadius: 4,
    marginRight: 10,
  },
  brandText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  menuIcon: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  headerSection: {
    padding: 16,
  },
  heading: {
    color: '#0B1E40',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 8,
  },
  subheading: {
    color: '#243B63',
    fontSize: 18,
    marginBottom: 16,
  },
  searchBox: {
    borderColor: '#D0D5DD',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 14,
  },
  searchInput: {
    fontSize: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#0B1E40',
  },
  countText: {
    fontSize: 16,
    color: '#243B63',
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 90,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 220,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 34,
    color: '#0B1E40',
    fontWeight: '700',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 24,
    color: '#243B63',
    lineHeight: 32,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    flexDirection: 'row',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  navLabelActive: {
    color: colors.primary,
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingRight: 16,
  },
  menuPanel: {
    width: 220,
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    padding: 18,
  },
  menuTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  menuTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#171717',
  },
  closeIcon: {
    fontSize: 24,
    color: '#444',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuItemIcon: {
    width: 24,
    marginRight: 8,
    fontSize: 20,
    color: '#171717',
    textAlign: 'center',
  },
  menuItemText: {
    fontSize: 28,
    color: '#171717',
    fontWeight: '600',
  },
});

export default HomeScreen;
