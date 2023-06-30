import { useState } from 'preact/hooks'
import Count from './Count'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>hey <Count c={count} /></p>
    </>
  )
}
