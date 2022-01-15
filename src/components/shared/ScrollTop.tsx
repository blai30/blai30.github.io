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
    <div className="block fixed bottom-20 right-10 md:right-16 z-50 print:hidden">
      <button
        id="scroll-top"
        className={`
        p-3 flex items-center justify-center transition transform-gpu ease-in-out backdrop-filter backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl text-white dark:text-white bg-opacity-60 dark:bg-opacity-60 bg-rose-400 dark:bg-rose-500 hover:bg-rose-500 dark:hover:bg-rose-600 focus:outline-none
        ${visible ? 'hover:scale-110' : 'scale-0'}
        `}
        name="Scroll top"
        aria-label="Scroll top"
        onClick={onScrollTop}
      >
        <span className="flex items-center justify-between">
          <ArrowUpIcon className="w-6 h-6" />
        </span>
      </button>
    </div>
  )
}

export default ScrollTop
