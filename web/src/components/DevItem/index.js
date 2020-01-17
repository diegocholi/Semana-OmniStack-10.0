import React from 'react'
import './styles.css'

// DevItem({ dev }) === DevItem(props){ const { dev } = props }
function DevItem({ devs }) {
    return(
        devs.map(dev => (
            <li key={ dev._id } className='dev-item'>
              <header>
                <img src={ dev.avatar_url } alt={ dev.login }></img>
                <div className='user-info'>
                  <strong>{ dev.login }</strong>
                  <span>{ dev.techs.join(', ') }</span>
                </div>
              </header>
              <p>{ dev.github_username }</p>
              <a href={ `https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>
        ))
    )
}

export default DevItem
