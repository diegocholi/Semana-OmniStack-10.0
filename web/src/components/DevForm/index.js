import React, { useState, useEffect } from 'react'

/**
 * Componente que recebe a função onSubmit para ser 
 * acionada pelo método criado para o formulário.
 */
function DevForm({ onSubmit }){
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => { 
    // Método de geolocalização do navegador
    navigator.geolocation.getCurrentPosition(
      // O primeiro parametro é uma função calback retorna a posição do usuário.
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      // O segundo retorna os erros.
      (err) => {
        console.log(err)
      },
      // O Terceiro é um JSON de configurações.
      {
        timeout: 30000
      }
    )
  }, [])

  /**
   * Método criar para o formulário. Será acionado no onSubmit do mesmo.
   * @param {*} e Event
   */
  async function handleSubmit(e) {
    // Previnindo comportamento Default do submit
    e.preventDefault()
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    })
    setGithubUsername('')
    setTechs('')
  }


  return (
      <form onSubmit={ handleSubmit }>
      <div className="input-block">
        <label htmlFor='github_username'>Usuário do Github</label>
        <input 
          name='github_username' 
          value={ github_username }
          onChange={ e => setGithubUsername(e.target.value) }
          required />
      </div>
      
      <div className="input-block">
        <label htmlFor='techs'>Tecnologias</label>
        <input 
          name='techs'  
          value={ techs }
          onChange={ e => setTechs(e.target.value) }
          required />
      </div>
      
      <div className="input-group">
        <div className="input-block">
          <label htmlFor='latitude'>Latitude</label>
          <input 
            type='number' 
            name='github_username' 
            value={ latitude } 
            onChange={ e => setLatitude(e.target.value)  }
            required />
        </div>

        <div className="input-block">
          <label htmlFor='longitude'>Longitude</label>
          <input 
            type='number' 
            name='github_username' 
            value={ longitude } 
            onChange={ e => setLongitude(e.target.value)  }
            required />
        </div>
      </div>
      <button type='submit'>salvar</button>
    </form>
  )
}

export default DevForm