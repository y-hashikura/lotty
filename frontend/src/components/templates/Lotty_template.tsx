import { InputBody } from '@/components/organisms/InputBody'
import { Header } from '@/components/organisms/Header'
export const LottyTemplate = () => {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <div className="w-80">
        <Header />
      </div>
      <InputBody />
    </div>
  )
}

export default LottyTemplate