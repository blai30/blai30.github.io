import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/outline'

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = (): void => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const onScrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <div className="fixed bottom-20 right-10 z-50 block print:hidden md:right-16">
      <button
        id="scroll-top"
        className={`
        flex transform-gpu items-center justify-center rounded-full bg-rose-400 bg-opacity-60 p-3 text-white shadow-lg backdrop-blur-lg backdrop-filter transition ease-in-out hover:bg-rose-500 hover:shadow-xl focus:outline-none dark:bg-rose-500 dark:bg-opacity-60 dark:text-white dark:hover:bg-rose-600
        ${visible ? 'hover:scale-110' : 'scale-0'}
        `}
        name="Scroll top"
        aria-label="Scroll top"
        onClick={onScrollTop}
      >
        <span className="flex items-center justify-between">
          <ArrowUpIcon className="h-6 w-6" />
        </span>
      </button>
    </div>
  )
}

export default ScrollTop
