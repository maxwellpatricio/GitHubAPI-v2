import ContainerPesquisa from './components/containerPesquisa/index'
import  ContainerPerfil from './components/containerPerfil/index'
import './App.css'
import { ContextProvider } from './context'
import React, { useContext } from 'react';
import { context } from './context';

function App() {
  const ctx = useContext(context);

  return (
    <>
      <ContextProvider>
        <ContainerPesquisa />    
        <ContainerPerfil name="Maxwell" login="maxwellpatricio" bio="TESSTE TESTE" />
      </ContextProvider>
    </>
  )
}

export default App
