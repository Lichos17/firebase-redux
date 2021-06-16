import React from 'react'


export const GreetingsContainer = () => {
  return (
    <div
      className="container center todos__card"
    >
      <div
        className="modal__form d-flex"
      >
        <h4
          className="m-1 big-font"
        >Thanks for Using My App</h4>

        <p>
          This is my first webapp using react, react-router, firebase, react-modal and redux
        </p>
        <p>You can see more of my projects in my webpage</p>
        <ul
          className="d-flex"
        >
          <li><a href="https://github.com/Lichos17"><i style={{marginLeft: '1rem'}} className="fab fa-github fa-4x"></i></a></li>
          <li><a href="https://hopeful-lalande-661f25.netlify.app/"><i style={{marginLeft: '1rem'}} className="fas fa-window-maximize fa-4x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/lichosmx/"><i style={{marginLeft: '1rem'}} className="fab fa-linkedin-in fa-4x"></i></a></li>
        </ul>
        
      </div>
    </div>
  )
}
