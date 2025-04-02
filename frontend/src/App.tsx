import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Layout from "./layouts/layout";

export default function App() {
  return (
   <BrowserRouter>
      <Routes> 
        <Route   path="/" element ={<Layout></Layout>}/>
        <Route path="/search" element = {<>Search Page</>} />
      </Routes>
   </BrowserRouter>
  )
}