import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainContent from './components/pages/Main'

// QueryClientのインスタンスを作成
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContent />
    </QueryClientProvider>
  )
}