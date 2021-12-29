import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import InputGroup from './components/InputGroup'
import Logo from './components/Logo'
import Select from './components/Select'
import { Text, Box } from './components/Typography'


function App() {
  const [investment, setInvestment] = useState(0)
  const [initial, setInitial] = useState(0)
  const [final, setFinal] = useState(0)
  const [total, setTotal] = useState(0)
  const [difference, setDifference] = useState(0)
  const [valute, setValute] = useState('EUR')

  const money = new Intl.NumberFormat(undefined, {
    style: 'currency',
    notation: 'compact',
    currency: valute,
  })

  const handleTotal = () => {
    const total = investment * (final / initial)
    const diff = total - investment;

    setTotal(money.format(total));
    setDifference(money.format(diff));
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-center text-white md:text-4xl">
            Kripto Kalkulator
          </h1>

          <Select
            onChange={(e) => setValute(e.target.value)}
            name="valuta"
            options={[
              {
                value: 'EUR',
                label: 'Euro'
              },
              {
                value: 'USD',
                label: 'Dollar'
              }
            ]}
          />
        </div>

        <div className="flex flex-col mt-8 space-y-8">
          <InputGroup
            name="investment"
            valute={valute}
            label="Investimi"
            onChange={(e) => setInvestment(e.target.value)}
          />

          <Input
            name="initial"
            label="Çmimi Blerës"
            onChange={(e) => setInitial(e.target.value)}
          />

          <Input
            name="final"
            label="Çmimi Shitës"
            onChange={(e) => setFinal(e.target.value)}
          />

          <div className="flex flex-wrap -mx-5">
            <div className="w-1/2 px-5">
              <Box type="info" label="Dallimi (profit)">{difference}</Box>
            </div>

            <div className="w-1/2 px-5">
              <Box label="Total">{total}</Box>
            </div>
          </div>

          <Button onClick={handleTotal}>Kalkulo</Button>

          <Text center>
            <b>Kujdes !</b> Kalkulimi më lartë nuk llogarit harxhimet e ndryshme gjatë transferit.
          </Text>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <Text center className="mb-4">Product of</Text>
          <a target="_blank" href="https://www.luckymedia.dev/?ref=kripto">
            <Logo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
