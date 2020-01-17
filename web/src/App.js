import React, { useState, useEffect } from 'react'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  /**
   * useState: O primeiro parametro é a variavel em si e o segundo é a função para alterar o estado
   * EX: const [counter, setCounter] = useState(0)
   * Para alterar o valor de um estado usa-se no HTML o comando onChange={ e => setLatitude = e.target.value }
   */
  const  [devs, setDevs] = useState([])

  /**
   * useState: Dispara uma função toda vez que uma informação for alterada
   * Ela recebe dois parametros: 
   * O primeiro é qual função ele precisa executar.
   * O segundo parametro é quando executar está função.
   *    O segundo parametro deve ser um array, que se passado vazio a função será executado uma única vez,
   *    e se passado uma váriavel a função será executada toda vez que a váriavel for alterada.
   */
  /**
   * Listagem de usários
   */
  useEffect(() =>{
    // Criamos as funções assincronas que queremos executar aqui
    async function loadDevs(){
      const response = await api.get('/users')
      setDevs(response.data)
    }

    // Executamos a função logo em seguida 
    loadDevs()
  }, [])

  /**
   * Método acionado pelo componente.
   * @param {*} data Informações recebidas via componente DevForm
   */
  async function handleAddDev(data){
    const response = await api.post('/users', data)
    setDevs([...devs, response.data])
  }

  return (
    <div id='app'>
      <aside>
        <strong>
          Cadastrar
        </strong>
        <DevForm onSubmit={ handleAddDev } />
      </aside>
      <main>
        <ul>
          <DevItem devs={ devs } />
        </ul>
      </main>
    </div>
  );
}

export default App
