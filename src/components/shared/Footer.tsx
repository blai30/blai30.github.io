const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="container mx-auto mb-4 p-8">
      <div className="items-center justify-between text-center">
        <a
          id="footer-credits"
          href="https://github.com/blai30/blai30.github.io/"
          className="text-sm font-light text-zinc-600 hover:text-rose-400 dark:text-zinc-400 dark:hover:text-rose-400"
        >
          <span>Made by Brian with Next.js & Tailwind &copy; {year}</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
