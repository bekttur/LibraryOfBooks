import "../Routes/css/Main.css"
import BookInfo from "./BookInfo"
import { Switch, Route, Link, Routes, Outlet } from "react-router-dom";
import { useState } from "react";


export const Main = ({array1}) => {

    

    const [valueName, setValueName] = useState('')
    const [valueAuthor, setValueAuthor] = useState('')
    const [valueGenre, setValueGenre] = useState('')

    const filteredBooks = array1.filter(books => {
        return (
            books.name.toLowerCase().includes(valueName.toLowerCase())
        )
    })

    return (
        <main>
            <div className="first-block">
                <img style={{width: 100, borderRadius: "50%"}} src="../photo.jpg" />
            </div>
            {/* <form className="search_form">
                <input type="text" className="search_input" onChange={(e) => setValueName(e.target.value)} placeholder="Поиск по именам"/>
            </form> */}
            <div className="main_block">
                <div className="main_item">
                    {filteredBooks.map(item => {
                        return (
                            <div className="main">
                                <div className="img_block">
                                    <img className="main_img" src={item.src} />
                                </div>
                                <div className="text_block">
                                    
                                        <Link to={"/book/" + `${item.id}`}><p style={{fontSize: "1.1rem", textDecoration: "none", backgroundColor: "white"}} className="main_text">{item.name}</p></Link>
                                    
                                    <p style={{fontSize: "0.9rem", backgroundColor: "white"}}>{item.author}</p>
                                </div>
                                <p className="for_author" style={{ color: "#676767", fontWeight: "600", fontSize: "0.8rem", backgroundColor: "white", textAlign: "center" }}>{item.year}</p>
                            </div>
                        )
                    })}
                    
                </div>
                
            </div>


        </main>
    )
    
}