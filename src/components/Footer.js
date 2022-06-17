import React from 'react'

const Footer = () => {
 let footerStyle= {
   top: "80vh",
   width: "100%"
 }
  return (
    <div className="bg-dark text-light py-2 my-3" style={footerStyle}>
      <p className="text-center ">

    
      Copyright &copy; MyTodosList.com
      </p>
    </div>
  )
}
export default Footer;
