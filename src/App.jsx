import { useState } from 'react'
import FirstCard from './components/FirstCard'
import SecondCard from './components/SecondCard'

export default function App() {
  const [step, setStep] = useState('first') // 'first' | 'second'

  return (
    <div className="page">
      {step === 'first' ? (
        <FirstCard onDone={() => setStep('second')} />
      ) : (
        <SecondCard />
      )}
    </div>
  )
}