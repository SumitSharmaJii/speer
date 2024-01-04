import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ListScreenSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.card}>
          <SkeletonPlaceholder>
            <View style={styles.card}>
              <View style={styles.avatar} />
              <View style={styles.username} />
            </View>
          </SkeletonPlaceholder>
        </View>
        <View style={styles.card}>
          <SkeletonPlaceholder>
            <View style={styles.card}>
              <View style={styles.avatar} />
              <View style={styles.username} />
            </View>
          </SkeletonPlaceholder>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.card}>
          <SkeletonPlaceholder>
            <View style={styles.card}>
              <View style={styles.avatar} />
              <View style={styles.username} />
            </View>
          </SkeletonPlaceholder>
        </View>
        <View style={styles.card}>
          <SkeletonPlaceholder>
            <View style={styles.card}>
              <View style={styles.avatar} />
              <View style={styles.username} />
            </View>
          </SkeletonPlaceholder>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141D2F',
  },
  box: {
    marginVertical:20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#1E2A47',
    borderRadius: 10,
    padding: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
});

export default ListScreenSkeleton;
