import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Waste Mangement',
    description: 'Enviro culture provides waste management services to ensure proper handling and disposal of the waste from your project in a cost-effective manner.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function WasteManagementLayout({
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