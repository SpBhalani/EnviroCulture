import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Scrubber Designing ans Solution',
    description: 'We at Enviro culture (Polution Control agency) giving recommendation/ Solution for the scrubber designing.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function SDaSLayout({
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