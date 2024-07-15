import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});
export const metadata = {
    title: {
        template: "%s | Dream Destinations",
        default: "Welcome to Dream Destinations",
    },
    description: "Travel app to book hotels across the world",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
            >
                <Header />

                <div className="flex-1 px-8 py-12 grid">
                    <main className="max-w-7xl mx-auto w-full">{children}</main>
                </div>
            </body>
        </html>
    );
}