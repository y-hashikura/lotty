import { LabeledRow } from '@/components/molecules/LabeledRow'
import { Select } from '@/components/atoms/Select'
import { Input } from '@/components/atoms/Text'


export const InputBody = () => {
  return (
    <div className="space-y-3">
      <div className="
        grid 
        grid-cols-[max-content,minmax(0,1fr),max-content] 
        gap-y-3 
        gap-x-2 
        w-80 
        mx-auto
      ">
        <LabeledRow label="対象口座">
          <Select options={[{ value: 'XM', label: 'XM' }]} />
        </LabeledRow>
        <LabeledRow label="口座タイプ">
          <Select options={[{ value: 'マイクロ口座', label: 'マイクロ口座' }]} />
        </LabeledRow>
        <LabeledRow label="損切Pips" prefix="pips">
          <Input type="number" />
        </LabeledRow>
        <LabeledRow label="損失許容額" prefix="円">
          <Input type="number" />
        </LabeledRow>
        <LabeledRow label="通貨ペア">
          <Select options={[{ value: 'EURUSD', label: 'EURUSD' }]} />
        </LabeledRow>
      </div>
    </div>
  )
}

export default InputBody