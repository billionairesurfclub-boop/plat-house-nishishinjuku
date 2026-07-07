import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス西新宿 | 新宿 130㎡ 一棟貸し切り 最大14名",
  description:
    "西新宿５丁目駅・初台駅徒歩10分。130㎡の一棟まるごと貸し切り。6つの寝室で最大14名。Netflix・Nintendo Switch・VRヘッドセット・10ギガインターネット・ドラム式洗濯機完備。新宿観光・グループ旅行に最適。",
  keywords:
    "ぷらっとハウス西新宿, 西新宿 一棟貸し切り, 西新宿 民泊, 新宿 一棟貸し, 東京 大人数 宿泊, ファミリー旅行 新宿, グループ旅行 新宿, 西新宿 宿泊, Tokyo private house, Nishi-Shinjuku accommodation, Tokyo group stay, 新宿 貸し切り 宿泊, 130平米 東京",
  openGraph: {
    title: "ぷらっとハウス西新宿 | 新宿 130㎡ 一棟貸し切り 最大14名",
    description:
      "西新宿５丁目駅徒歩10分。130㎡一棟貸し切り。6寝室・最大14名。Netflix・VR・10ギガ完備。",
    url: "https://nishishinjuku.plat-house.jp",
    siteName: "Plat House Nishi-Shinjuku",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://nishishinjuku.plat-house.jp",
    languages: {
      "ja": "https://nishishinjuku.plat-house.jp",
      "en": "https://nishishinjuku.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス西新宿",
          "url": "https://nishishinjuku.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "西新宿4-23-10",
            "addressLocality": "新宿区",
            "addressRegion": "東京都",
            "postalCode": "160-0023",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥40,000〜¥70,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "VRヘッドセット", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "10ギガインターネット", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ドラム式洗濯機", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
