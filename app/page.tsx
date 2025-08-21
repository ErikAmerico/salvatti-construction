import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <h2>hi</h2>
      <Script id="ld-local" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://www.salvatihome.com/#business",
          name: "Salvati Home Improvements",
          url: "https://www.salvatihome.com",
          telephone: "+1-781-960-5715",
          priceRange: "$$",
          areaServed: ["Greater Boston", "North Shore MA"],
          logo: "https://www.salvatihome.com/images/logo.png",
          image: [
            "https://www.salvatihome.com/images/logo.png",
            "https://www.salvatihome.com/images/web-app-manifest-512x512.png",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Reading",
            addressRegion: "MA",
            postalCode: "01867",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 42.52585,
            longitude: -71.109939,
          },
          sameAs: [
            "https://www.thumbtack.com/ma/reading/drywall-repair/salvati-home-improvements/service/520260482546130962",
            "https://www.instagram.com/salvatihomeimprovements",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "12",
          },
        })}
      </Script>
    </>
  );
}
