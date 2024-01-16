import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | EIA Studies',
    description: 'We guide our clients to get legal approvals from the authorities that are responsible for levying restrictions and prohibitions to save the environment from pollutions toxic wastes.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function EIAStudiesLayout({
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