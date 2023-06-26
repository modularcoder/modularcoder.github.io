export function throttle<F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  interval: number
) {
  let inThrottle = false
  let lastCallTime: number
  let lastCallHandler: ReturnType<typeof setTimeout>

  return (...args: Parameters<F>) => {
    if (!inThrottle) {
      fn(...args)
      lastCallTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastCallHandler)

      lastCallHandler = setTimeout(() => {
        fn(...args)
        lastCallTime = Date.now()
        inThrottle = false
      }, Math.max(interval - (Date.now() - lastCallTime), 0))
    }
  }
}
