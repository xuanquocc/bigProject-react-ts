import './App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Form from './components/form/Form'

function App() {

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false}/>
      <Form />
    </>
  )
}

export default App
