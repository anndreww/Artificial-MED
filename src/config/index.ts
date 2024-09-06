import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Artificial MED",
        template: `%s | ArtificialMED`
    },
    description: "Artificial MED utilizează inteligența artificială pentru detectarea și diagnosticarea mai precisă a cancerului prin analizarea investigațiilor imagistice și rapoartelor medicale.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Artificial MED - Detectarea cancerului folosing AI",
        description: "Artificial MED utilizează inteligența artificială pentru detectarea și diagnosticarea mai precisă a cancerului prin analizarea investigațiilor imagistice și rapoartelor medicale.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
};
