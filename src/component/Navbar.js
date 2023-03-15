import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <ol >
            <li>

                <NavLink to="/" style={({ isActive }) => { return { color: isActive ? 'blue' : '' } }} > Home </NavLink></li>
                <li>   <NavLink to="/about" style={({ isActive }) => { return { color: isActive ? 'blue' : '' } }}  > About </NavLink>  </li>
          
            <li>   <NavLink to="/choosetemplate" style={({ isActive }) => { return { color: isActive ? 'blue' : '' } }}  > Choose Template</NavLink>  </li>
            <li>   <NavLink to="/preview" style={({ isActive }) => { return { color: isActive ? 'blue' : '' } }}  > Preview page </NavLink>  </li>
            <li>   <NavLink to="/details" style={({ isActive }) => { return { color: isActive ? 'blue' : '' } }}  >  Detail page  </NavLink>  </li>
            <li>   <NavLink to="/download" style={({ isActive }) => { return { color: isActive ? 'blue' : '' } }}  > Download page </NavLink>  </li>
         

        </ol>










    )
}

export default Navbar