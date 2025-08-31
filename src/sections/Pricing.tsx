export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-8 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl mb-4">Basic</h3>
          <p className="text-gray-600 mb-4">$9/month</p>
          <button className="bg-[#1B1F3B] text-white px-4 py-2 rounded-lg">Choose</button>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md border-2 border-[#1B1F3B]">
          <h3 className="font-semibold text-xl mb-4">Pro</h3>
          <p className="text-gray-600 mb-4">$29/month</p>
          <button className="bg-[#1B1F3B] text-white px-4 py-2 rounded-lg">Choose</button>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl mb-4">Enterprise</h3>
          <p className="text-gray-600 mb-4">Custom</p>
          <button className="bg-[#1B1F3B] text-white px-4 py-2 rounded-lg">Contact Us</button>
        </div>
      </div>
    </section>
  )
}
