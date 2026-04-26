import "./globals.css";

export const metadata = {
  title: "JSR Eagle Construction LTD | Premium Tile Installation",
  description:
    "Premium tile installation, luxury tiling, bathroom renovation, floor tiling, and construction finishing by JSR Eagle Construction LTD."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
