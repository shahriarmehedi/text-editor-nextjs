import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
        </main>
    );
}
