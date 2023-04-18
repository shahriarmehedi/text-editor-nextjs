import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import Content from "@/components/home/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="flex">
                <Sidebar />
                <Content />
            </div>
        </main>
    );
}
