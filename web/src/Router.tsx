import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { FilteredProperties } from './pages/FilteredProperties/FilteredProperties'
import { PropertyDetail } from './pages/Property/PropertyDetail'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/imoveis-filtrados' element={<FilteredProperties />}/>
      </Route>

      <Route path="/imovel/:id" element={<PropertyDetail />} />
    </Routes>
  )
}