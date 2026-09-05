import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export default function Details() {
    const router = useRouter();
    const { name } = useLocalSearchParams();
    return (
        <Box className="flex-1 bg-white p-6">
            <VStack space="lg">
                <Text size="xl">
                    Esta é a rota "/details" (arquivo app/details.jsx)
                </Text>
                <Divider />
                <Text size="md">
                    Parâmetro recebido da outra tela: <Text className="font-extrabold text-amber-700">{name ? name : "Sem Parâmetro"}</Text>
                </Text>
                <Button size="lg" action="primary" onPress={() => router.back()}
                    className="bg-emerald-600 data-[hover=true]:bg-emerald-500 data-[active=true]:bg-emerald-700  "
                    >
                    <ButtonText className="font-bold uppercase">Voltar</ButtonText>
                </Button>

            </VStack>
        </Box>
    )
}