import { ArrowUpIcon } from '@heroicons/react/outline'

const ScrollTop = () => {
  const isScrolled = (): boolean => {
    return false
    // return (
    //   document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    // )
  }

  const onScrollTop = (): void => {
    // // For Safari.
    // document.body.scrollTop = 0
    // // For Chrome, Firefox, Internet Explorer, and Opera.
    // document.documentElement.scrollTop = 0
  }

  return (
    <div className="block fixed bottom-20 right-10 md:right-16 z-50">
      <button
        id="scroll-top"
        className={`
        p-3 flex items-center justify-center transition transform-gpu ease-in-out backdrop-filter backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl text-white dark:text-white bg-opacity-60 dark:bg-opacity-60 bg-pink-400 dark:bg-pink-500 hover:bg-pink-500 dark:hover:bg-pink-600 focus:outline-none
        ${isScrolled() ? 'hover:scale-110' : 'scale-0'}
        `}
        name="Scroll top"
        aria-label="Scroll top"
        onClick={onScrollTop}
      >
        <span className="flex items-center justify-between">
          <ArrowUpIcon />
        </span>
      </button>
    </div>
  )
}

export default ScrollTop
