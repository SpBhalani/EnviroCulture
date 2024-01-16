import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Pollution Control and Treatment',
    description: 'Enviro Culture provides management services to control and treat the pollution that may be a side-effect of your project.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function PCTLayout({
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