export default function Features() {
  return (
    <section id="features" className="py-20 px-8 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl mb-4">Easy Scheduling</h3>
          <p className="text-gray-600">Manage timetables and classes effortlessly.</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl mb-4">Student Tracking</h3>
          <p className="text-gray-600">Keep records organized and accessible.</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl mb-4">Collaboration</h3>
          <p className="text-gray-600">Connect teachers, students, and parents easily.</p>
        </div>
      </div>
    </section>
  )
}
