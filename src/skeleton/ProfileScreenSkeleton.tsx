import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SkeletonPlaceholder>
          {/* Profile card */}
          <View style={styles.card}>
            {/* Avatar */}
            <View style={styles.avatar} />

            
            <View style={{alignItems: 'center'}}>
              <View style={styles.name} />
              <View style={styles.username} />
            </View>

             <View style={{alignItems: 'center'}}>
              <View style={styles.name} />
              <View style={styles.username} />
            </View>

            <View style={styles.bio} />

            <View style={styles.stats}>
              <View style={styles.statItem} />
              <View style={styles.statItem} />
              <View style={styles.statItem} />
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={styles.name} />
              <View style={styles.username} />
            </View>
          </View>
        </SkeletonPlaceholder>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#141D2F',
  },
  card: {
    backgroundColor: '#1E2A47', 
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    width: 100,
    height: 20,
    borderRadius: 4,
    marginBottom: 6,
  },
  username: {
    width: 80,
    height: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  bio: {
    width: 240,
    height: 50,
    borderRadius: 4,
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statItem: {
    width: 70,
    height: 20,
    borderRadius: 4,
    marginRight: 5,
  },
 
});

export default SkeletonProfileScreen;
