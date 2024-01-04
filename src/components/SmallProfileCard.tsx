import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const UserProfileCard = ({user}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Profile', {url: user.url});
        }}
        style={styles.userCard}>
        <Image source={{uri: user.avatar_url}} style={styles.avatar} />
        <Text numberOfLines={1} style={styles.userHandle}>
          {user.login}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141D2F',
    alignItems: 'center',
    padding: 20,
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
    alignSelf: 'center',
  },
  userHandle: {
    color: '#007AFF',
    fontSize: 16,
    marginBottom: 15,
  },
});
