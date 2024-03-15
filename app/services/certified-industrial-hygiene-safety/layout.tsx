import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Enviro Culture | Certified Industrial Hygiene and safety',
    description: 'Enviro Culture provide varios services in Hygien and safety like Industrial Hygiene Program Development, implementation and maintenance
    Qualitative Exposure Assessment
    Quantitative Exposure Assessment (E. g. Particulate, Solvents, metals, silica, acid, oil mist,asbestos,etc.)
    Surrogate Material Sampling
    Containment System (E. g. Isolator,SBV,etc.) Validation as per ISPE guideline
    PDE & OEL value calculation of new API/ molecule
    Heat stress assessment
    Occupational Noise assessment and abatement
    Form 37 (Workplace monitoring)
    Qualitative & Quantitative Respiratory Fit Test
    Ergonomics Evaluations, Posture analysis and furniture designing
    Indoor Air Quality Assessment
    Compressed Breathing Air Analysis
    Asbestos survey`,
    icons: {
      icon: '/fevicon.ico'
    }
  }

  export default function CertifiedHygieneLayout({
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