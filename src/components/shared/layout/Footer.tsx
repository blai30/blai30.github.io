const Footer = () => {
  const today: number = new Date().getFullYear()

  return (
    <footer id="footer" className="container mx-auto mb-4 p-8">
      <div className="items-center justify-between text-center">
        <p className="text-sm font-light text-gray-600 dark:text-gray-400">
          <a
            id="footer-credits"
            href="https://github.com/blai30/www.bhlai.com/"
            className="hover:text-pink-400"
          >
            <span>Made by Brian with Next.js & Tailwind &copy; {today}</span>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
