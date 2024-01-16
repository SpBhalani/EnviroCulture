import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Services',
    description: 'We are capable of delivering innovative one-stop solutions to your wastewater management and treatment, sewerage management, solid waste, and hazardous waste ...',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function ServicesLayout({
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