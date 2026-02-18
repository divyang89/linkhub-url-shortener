import UrlForm from '../components/forms/UrlForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          LinkHub
        </h1>
        <p className="text-gray-600">
          Shorten and track your URLs
        </p>
      </div>
      <UrlForm />
    </div>
  )
}
