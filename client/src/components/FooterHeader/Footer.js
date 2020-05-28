import React from 'react'
import './FooterHeader.css';
import '../../page.css'
// import './footer.css'

const Footer = (props) => {
  return (
    <div className="headFootTxt Footer" style={{paddingTop: "6rem"}}>
      <p>MAX REINMUELLER'S LOG</p>
      <p>Created using <a href="https://reactjs.org/" target="https://reactjs.org/" className="headerText">React</a></p>
    </div>
  )
}

export default Footer