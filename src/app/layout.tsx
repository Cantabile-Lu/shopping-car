import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Provider } from "@/app/providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "光厂创意",
    description: "视频素材 , 光厂更专业",
    icons: {
        icon: "/next.svg",
    },
};
export const viewport: Viewport = {
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const local = await getLocale();

    const messages = await getMessages();

    return (
        <html lang={local}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased purple-dark`}
            >
                <Provider>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </Provider>
            </body>
        </html>
    );
}
