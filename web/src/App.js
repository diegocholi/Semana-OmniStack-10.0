import React, { useState } from 'react'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  // O primeiro parametro é a variavel em si e o segundo é a função para alterar o estado
  // const [counter, setCounter] = useState(0)

  return (
    <div id='app'>
      <aside>
        <strong>
          Cadastrar
        </strong>
        <form>
          <div className="input-block">
            <label htmlFor='github_username'>Usuário do Github</label>
            <input name='github_username' required />
          </div>
          
          <div className="input-block">
            <label htmlFor='tecs'>Tecnologias</label>
            <input name='tecs' required />
          </div>
          
          <div className="input-block">
            <label htmlFor=''>Usuário do Github</label>
            <input name='github_username' required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor='latitude'>Latitude</label>
              <input name='github_username' required />
            </div>

            <div className="input-block">
              <label htmlFor='longitude'>Longitude</label>
              <input name='github_username' required />
            </div>
          </div>

          <button type='submit'>salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/48794883?s=460&v=4' alt='Diego Choli'></img>
              <div className='user-info'>
                <strong>Diego Choli</strong>
                <strong>ReactJS, React Native, Node.js</strong>
                <strong>BIO ...</strong>
                <a href="https://github.com/diegocholi">Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/48794883?s=460&v=4' alt='Diego Choli'></img>
              <div className='user-info'>
                <strong>Diego Choli</strong>
                <strong>ReactJS, React Native, Node.js</strong>
                <strong>BIO ...</strong>
                <a href="https://github.com/diegocholi">Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/48794883?s=460&v=4' alt='Diego Choli'></img>
              <div className='user-info'>
                <strong>Diego Choli</strong>
                <strong>ReactJS, React Native, Node.js</strong>
                <strong>BIO ...</strong>
                <a href="https://github.com/diegocholi">Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <img src='https://avatars0.githubusercontent.com/u/48794883?s=460&v=4' alt='Diego Choli'></img>
              <div className='user-info'>
                <strong>Diego Choli</strong>
                <strong>ReactJS, React Native, Node.js</strong>
                <strong>BIO ...</strong>
                <a href="https://github.com/diegocholi">Acessar perfil no Github</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App
