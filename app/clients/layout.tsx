import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Clients',
    description: 'Know our clients who all got benefits of Polution controll services provided by Enviroculture.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function ClientLayout({
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