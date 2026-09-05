import { Text } from "@/components/ui/text";
import { Link } from "expo-router";

export default function Home() {
    return (
        <>
            <Text>Página Principal</Text>
            <Link href="/details">Detalhhes</Link>
        </>
    )
}