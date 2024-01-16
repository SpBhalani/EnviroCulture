import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | Laboratory',
    description: 'Our laboratory is a hi-tech solution for monitoring and assessing the impacts on the environment from your projects.',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function LaboratoryLayout({
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