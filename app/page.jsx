import { Main } from "../components/heros/Main";

export const metadata = {
  title: 'Expert Project Controls & Forensic Delay Analysis',
  description: 'Linx-to Project Controls provides evidence-based project planning, scheduling, forensic delay analysis, and expert witness services for construction and infrastructure projects across the UK and internationally.',
  openGraph: {
    title: 'Expert Project Controls & Forensic Delay Analysis | Linx-to',
    description: 'Evidence-based project planning, scheduling, forensic delay analysis, and expert witness services for construction and infrastructure projects.',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main />
    </main>
  );
}
