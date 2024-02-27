import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { publicRoutes } from './routes'

function App() {

  return (
    <div className='md:container mx-auto'>
      <ReactQueryDevtools initialIsOpen={false}/>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}
      </Routes>
    </div>
  )
}

export default App
