import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from './components/ui/button';
import { Box } from './components/ui/box';
import { HStack } from './components/ui/hstack';
import { VStack } from './components/ui/vstack';

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <SafeAreaView className="flex-1 bg-slate-500">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingEnd: 30 }}>
          <Box className="h-24 bg-white border-b border-slate-200 px-6 flex-row items-center justify-between">
            <HStack className="items-center gap-4">
              <Text>A</Text>
              <Box>
                <VStack>
                  <Text>Nome</Text>
                  <Text>Nome</Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
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
