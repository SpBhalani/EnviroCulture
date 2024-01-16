import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Infrastructure',
    description: 'We have been leading the environmental industry throughout the last decade. We provide a range of analyses and tests on the air, water, soil, solid, and toxic ...',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function InfrastructureLayout({
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