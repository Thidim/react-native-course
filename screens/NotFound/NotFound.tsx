import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import globalStyles from '../../constants/Styles';
import { AuthStackScreenProps } from '../../constants/types';

const NotFound = ({ navigation }: AuthStackScreenProps<'not_found'>) => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('apps')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default NotFound;