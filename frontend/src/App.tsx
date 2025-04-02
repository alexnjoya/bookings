import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Layout from "./layouts/layout";

export default function App() {
  return (
   <BrowserRouter>
      <Routes> 
        <Route   path="/" element ={<Layout><p>Homepage</p></Layout>}/>
        <Route path="/search" element = {<Layout><p>Search Page</p></Layout>} />
      </Routes>
   </BrowserRouter>
  )
}