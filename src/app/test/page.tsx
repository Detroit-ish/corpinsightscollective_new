import { CaseStudies } from '@/components/features/case-studies';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-brand-accent2">
      {/* Header */}
      <header className="bg-brand-secondary-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Component Test Environment</h1>
          <p className="text-brand-secondary-200">Case Studies - Phase 1</p>
        </div>
      </header>

      {/* Test Component */}
      <CaseStudies />

      {/* Test Documentation */}
      <footer className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-4 text-sm text-brand-secondary-400">
          <h2 className="font-semibold text-brand-secondary-500 mb-2">Test Notes:</h2>
          <ul className="space-y-1">
            <li>• Viewing test implementation only</li>
            <li>• Mobile-first layout (390px base)</li>
            <li>• Using temp test data</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}