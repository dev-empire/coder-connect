/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react'

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listner = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listner)
    return () => {
      document.removeEventListener('mousedown', listner)
    }
  }, [ref, handler])
}
