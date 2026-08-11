import type { Metadata, Viewport } from "next";
import { Poppins, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { keywords, site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ali Hassan, AI Engineer & Data Scientist | alihassanml",
    template: "%s | Ali Hassan, AI Engineer",
  },
  description: site.summary,
  keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: "Ali Hassan, AI Engineer",
  alternates: { canonical: "/" },
  category: "technology",
  verification: {
    google: "vQRJdUMkJO6VkfOc_Hpew0EeEWHKx2xFP1RtVYdPlmI",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Ali Hassan, AI Engineer",
    title: "Ali Hassan, AI Engineer & Data Scientist",
    description: site.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@alihassanml",
    creator: "@alihassanml",
    title: "Ali Hassan, AI Engineer & Data Scientist",
    description: site.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  colorScheme: "light",
};

/** Person + WebSite graph. This is what search engines read to connect
 * the name "Ali Hassan", the handle "alihassanml" and the job title. */
const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: "Ali Hassan",
      alternateName: ["alihassanml", "Ali Hassan ML", "Ali Hassan, AI Engineer"],
      url: site.url,
      image: `${site.url}/image.jpeg`,
      jobTitle: "AI Engineer",
      description: site.summary,
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "AI Engineering",
        "Agentic AI",
        "AI Agents",
        "Multi-Agent Systems",
        "AI Voice Agents",
        "Generative AI",
        "Large Language Models",
        "Retrieval Augmented Generation",
        "LangChain",
        "LangGraph",
        "OpenAI",
        "Claude",
        "Gemini",
        "Hugging Face",
        "AI Automation",
        "n8n",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "YOLO Object Detection",
        "Natural Language Processing",
        "MLOps",
        "Data Science",
        "Python",
        "PyTorch",
        "TensorFlow",
        "FastAPI",
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Vector Databases",
        "AWS",
        "Docker",
        "Full Stack Development",
      ],
      sameAs: [
        site.links.github,
        site.links.linkedin,
        site.links.kaggle,
        site.links.twitter,
        site.links.upwork,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Ali Hassan, AI Engineer",
      description: site.summary,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
