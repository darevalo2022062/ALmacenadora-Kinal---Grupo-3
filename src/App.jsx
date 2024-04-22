import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes  from '../routes'

function App() {
  let space = useRoutes(routes);
  return (
    <>
      {space}
    </>
  )
}

export default App
