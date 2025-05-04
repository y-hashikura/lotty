
import { Label } from '@/components/atoms/Label'

interface LabeledRowProps {
  label: string
  children: React.ReactNode
  prefix?: string
}
export const LabeledRow = ({ label, children, prefix }: LabeledRowProps) => (
  <>
    <Label>{label}</Label>
    {children}
    <span className="text-gray-500">{prefix || ''}</span>
  </>
)