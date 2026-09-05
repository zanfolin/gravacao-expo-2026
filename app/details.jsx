import { Text } from "@/components/ui/text";
import { Link } from "expo-router";

export default function Details() {
    return (
        <>
            <Text>Detalhes</Text>
            <Link href="/home">Página Principal</Link>
        </>
    )
}