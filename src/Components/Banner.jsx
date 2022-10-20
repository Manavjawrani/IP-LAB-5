import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Manav Jawrani </h1>
                    
            </section>
        )
    }
}

export default Banner


