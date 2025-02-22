/**
 * Renders the footer component for the application.
 * The footer includes a copyright notice and links to the company's social media profiles.
 */



export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <a href="https://www.facebook.com/seu-perfil-do-facebook" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/seu-perfil-do-instagram" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />