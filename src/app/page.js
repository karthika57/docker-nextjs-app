
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Next.js Docker Application
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome! This application is created to learn
          Docker containerization.
        </p>

        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-blue-800 font-semibold">
            Application Status: Running
          </p>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </main>
  );
}
