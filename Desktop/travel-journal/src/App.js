import React from "react"
import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.title}
                {...item}
            />
        )
    }) 
    
    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}