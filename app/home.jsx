import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link, useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();


    return (
        <Box className="flex-1 bg-white p-6">
            <VStack space="lg">
                <Heading size="xl">Tela Inicial</Heading>
                <Text size="md">
                    Esta é a rota "/" (arquivo app/home.jsx). Os botões abaixo levam para a mesma tela de detalhes,
                    usaando as formas de navegar do expo-router.
                </Text>
                <Divider />
                <Link href="/details" asChild>
                    <Button size="lg" action="primary">
                        <ButtonText>Ir com o Link (declarativo)</ButtonText>
                    </Button>
                </Link>
                <Divider />
                <Button
                    size="lg"
                    action="secodary"
                    onPress={() => router.push("/details")}
                >
                    <ButtonText>Ir com router.push</ButtonText>
                </Button>
                <Center>
                    <Divider className="my-0.5 w-20 bg-emerald-500" />
                </Center>
                <Button
                    size="lg"
                    variant="outline"
                    onPress={() => {
                        router.push({
                            pathname: "/details",
                            params: { name: "2o. INFO" }
                        })
                    }}
                >
                    <ButtonText>Ir enviando um parâmetro</ButtonText>
                </Button>

            </VStack>
        </Box>
    )
}