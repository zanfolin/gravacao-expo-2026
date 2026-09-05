import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import "@/global.css"

export default function RootLayout() {
    return (
        <GluestackUIProvider mode="light">
            {/* <Stack screenOptions={{headerShown: false}}> */}
            <Stack>
                <Stack.Screen name="home" options={{headerTitle: "Págaina Principal"}}/>
                <Stack.Screen name="details" options={{headerTitle: "Detalhes"}}/>
            </Stack>
        </GluestackUIProvider>
    )
}