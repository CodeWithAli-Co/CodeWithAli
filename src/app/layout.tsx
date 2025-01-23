
import "./Styles/globals.css";
import "./Styles/mediaSizing.css"

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/sections/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
       <Header />
        <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}