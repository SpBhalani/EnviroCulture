import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Certificates',
    description: 'Certificates describes more about our core. Know more about the achivements and certificats earned by team Enviro Culture.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function CertificateLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
      </>
    )
  }