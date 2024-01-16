import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Enviro Culture | About Us',
    description: 'Enviro Culture is a pollution control consultancy services provider to enhance and adhere to your business standards to stay under the compliance levied by your ...',
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function AboutUsLayout({
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