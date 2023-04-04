import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { FilteredProperties } from './pages/FilteredProperties/FilteredProperties'
import { PropertyDetail } from './pages/Property/PropertyDetail'
import { About } from './pages/About/About'
import { AdminLayout } from './layouts/AdminLayout'
import { ListProperties } from './pages/Admin/ListProperties'
import { CreateProperty } from './pages/Admin/CreateProperty'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/imoveis-filtrados' element={<FilteredProperties />}/>
        <Route path='/quem-somos' element={<About />}/>
      </Route>

      <Route path="/imovel/:id" element={<PropertyDetail />} />

      <Route path='/administrador' element={<AdminLayout />}>
        <Route path='/administrador' element={<ListProperties />}/>
        <Route path='/administrador/criar-imovel' element={<CreateProperty />}/>
      </Route>
    </Routes>
  )
}