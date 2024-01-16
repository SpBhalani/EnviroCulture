import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Contact Us',
    description: 'This will help you to contact Enviro Culture to provide sollution for your business regarding pollution control services.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function COntactUsLayout({
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