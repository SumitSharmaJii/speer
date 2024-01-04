import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import UserProfileCard from '../components/UserProfileCard';
import useAxiosFetch from '../hooks/useAxiosFetch';
import ProfileScreenSkeleton from '../skeleton/ProfileScreenSkeleton';

const ProfileScreen = ({route}: any) => {
  const {data: user, error, loading, fetchData} = useAxiosFetch();
  useEffect(() => {
    fetchData(route.params.url);
  }, []);

  return loading ? (
    <ProfileScreenSkeleton />
  ) : (
    <View style={styles.container}>
      {user && <UserProfileCard user={user} />}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141D2F',
    alignItems: 'center',
    padding: 12,
  },
});
