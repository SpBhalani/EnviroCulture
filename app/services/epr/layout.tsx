import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Extended Producer Responsibility',
    description: 'Extended Producer Responsibility is for all business to maintain. We provide solution for this kind of Service',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function EPRLayout({
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