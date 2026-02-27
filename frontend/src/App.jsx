import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { ArticlesProvider } from "./Context/articlesContext"
import { CategoriesProvider } from "./Context/categoriesContext"

import Sidebar from "./Compoments/Sidebar"

import Home from "./Pages/Home"

const App = () => {
  const Layout = () => {
    return (
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar />
        <Outlet />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <CategoriesProvider>
        <ArticlesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </ArticlesProvider>
      </CategoriesProvider>
    </BrowserRouter>
  )
}

export default App
