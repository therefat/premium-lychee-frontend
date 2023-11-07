import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <h1>Hello</h1>
      <button className="btn">Button</button>
      <button className="btn btn-active">Default</button>
<button className="btn btn-active btn-neutral">Neutral</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-ghost">Ghost</button>
<button className="btn btn-active btn-link">Link</button>
    </>
  )
}

export default App
