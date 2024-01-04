import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const UserProfileCard = ({user}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.userCard}>
        <Image source={{uri: user.avatar_url}} style={styles.avatar} />
        <Text numberOfLines={1} style={styles.userName}>
          {user.name}
        </Text>
        <Text style={styles.userHandle}>{user.login}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.stats}>
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>{user.public_repos}</Text>
            <Text style={styles.statLabel}>Repos</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Users', {url: user.url+'/followers'});
            }}
            style={styles.statBlock}>
            <Text style={styles.statNumber}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Users', {url: user.url+'/following'});
            }}
            style={styles.statBlock}>
            <Text style={styles.statNumber}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Icon name="map-marker" size={16} color="#fff" />
          <Text style={styles.infoText}>
            {user.location || 'Not Available'}
          </Text>
        </View>
        <View style={styles.info}>
          <Icon name="twitter" size={16} color="#fff" />
          <Text style={styles.infoText}>
            {user.twitter_username || 'Not Available'}
          </Text>
        </View>
        <View style={styles.info}>
          <Icon name="link" size={16} color="#fff" />
          <Text style={styles.infoText}>{user.blog || 'Not Available'}</Text>
        </View>
        <View style={styles.info}>
          <Icon name="github" size={16} color="#fff" />
          <Text style={styles.infoText}>
            {user.html_url || 'Not Available'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141D2F',
    alignItems: 'center',
    padding: 12,
  },
  userCard: {
    backgroundColor: '#1E2A47',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  userHandle: {
    color: '#007AFF',
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statBlock: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 16,
  },
});
