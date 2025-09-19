import { useCallback } from 'react'

interface ScrollOptions {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
  offset?: number
}

export function useSmoothScroll() {
  const scrollToElement = useCallback(
    (elementId: string, options: ScrollOptions = {}) => {
      const {
        behavior = 'smooth',
        block = 'start',
        inline = 'nearest',
        offset = 0,
      } = options

      const element = document.getElementById(elementId)
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`)
        return
      }

      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior,
      })
    },
    [],
  )

  const scrollToTop = useCallback((options: ScrollOptions = {}) => {
    const { behavior = 'smooth' } = options

    window.scrollTo({
      top: 0,
      behavior,
    })
  }, [])

  const scrollToBottom = useCallback((options: ScrollOptions = {}) => {
    const { behavior = 'smooth' } = options

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior,
    })
  }, [])

  const scrollBy = useCallback(
    (x: number, y: number, options: ScrollOptions = {}) => {
      const { behavior = 'smooth' } = options

      window.scrollBy({
        left: x,
        top: y,
        behavior,
      })
    },
    [],
  )

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollBy,
  }
}
