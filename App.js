import { StyleSheet, Text, View } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from './components/ui/button';

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text>Gravação Aula</Text>
        <Text style={styles.negrito}>DDM I - 2026</Text>
        <Button variant="secondary" size="default">
          <ButtonText className=' font-bold uppercase'>2o. INFO - etec</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  negrito: {
    fontWeight: 'bold',
  }
});
