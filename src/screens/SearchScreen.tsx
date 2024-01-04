import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useAxiosFetch from '../hooks/useAxiosFetch';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserProfileCard from '../components/UserProfileCard';
import ProfileScreenSkeleton from '../skeleton/ProfileScreenSkeleton';

const SearchScreen = () => {
  const [username, setUsername] = useState('');
  const {data: user, error, loading, fetchData, removeError} = useAxiosFetch();

  const handleSearch = () => {
    fetchData(`https://api.github.com/users/${username}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Search GitHub username..."
          placeholderTextColor="#fff"
          onChangeText={txt => {
            setUsername(txt);
            removeError();
          }}
          value={username}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ProfileScreenSkeleton />
      ) : (
        user && <UserProfileCard user={user} />
      )}
      {error && username && (
        <View style={styles.card}>
          <Text style={styles.err}>{error}</Text>
          <Icon name="frown-o" size={50} color="#fff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141D2F',
    alignItems: 'center',
    padding: 12,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E2A47',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1E2A47',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  err: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SearchScreen;
