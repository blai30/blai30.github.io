import { useEffect, useState } from 'react'

function useDocumentScrollThrottled(callback: Function) {
  const [, setScrollPosition] = useState(0)
  let previousScrollTop = 0

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition
      return currentScrollTop
    })

    callback({ previousScrollTop, currentScrollTop })
  };

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScroll)

    return () =>
      window.removeEventListener('scroll', handleDocumentScroll)
  })
}

export default useDocumentScrollThrottled
