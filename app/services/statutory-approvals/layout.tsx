import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Statutory Approvals',
    description: 'We at Enviro culture (Polution Control agency) giving recommendation/ Solution for the Statutory approvals.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function StatutoryApprovalsLayout({
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