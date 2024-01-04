import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SmallProfileCard from '../components/SmallProfileCard';
import useAxiosFetch from '../hooks/useAxiosFetch';
import ListScreenSkeleton from '../skeleton/ListScreenSkeleton';
import {getNextPageUrl} from '../utils/getNextPageUrl';

const UsersListScreen = ({route}: any) => {
  const [DATA, setDATA] = useState<any[]>([]);
  const {data: users, headers, loading, fetchData} = useAxiosFetch();

  useEffect(() => {
    fetchData(route.params.url);
  }, []);

  useEffect(() => {
    if (users) {
      setDATA(prev => [...prev, ...users]);
    }
  }, [users]);

  const loadMore = () => {
    if (headers?.link) {
      const next = getNextPageUrl(headers.link);
      if (next) fetchData(next);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (loading ? <ListScreenSkeleton /> : null)}
      />
    </View>
  );
};

const RenderItem = ({item, index}: any) => {
  return <SmallProfileCard user={item} />;
};

export default UsersListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141D2F',
    padding: 12,
  },
});
