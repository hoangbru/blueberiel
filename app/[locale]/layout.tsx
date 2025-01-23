import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";

import {
  BackToTop,
  FooterContainer,
  HeaderContainer,
} from "@/components/layout";
import { PreLoader } from "@/components/template";

import { routing } from "@/i18n/routing";
import AppProviders from "@/providers/AppProviders";

const fontRegular = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: never };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className={fontRegular.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <PreLoader />
            <HeaderContainer />
            <Toaster />
            {children}
            <BackToTop />
            <FooterContainer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
