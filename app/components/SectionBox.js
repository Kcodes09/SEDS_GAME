export default function SectionBox({ title, children }) {
  return (
    <section className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {children}
    </section>
  );
}
