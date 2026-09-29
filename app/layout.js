import "./globals.css";

export const metadata = {
  title: "台灣鮮果光廊",
  description: "介紹台灣水果的玻璃亮面風格官方網站。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
