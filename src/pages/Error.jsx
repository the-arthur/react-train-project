
import React from 'react'

const Error = () => {
    return (
        <div style={{ display: 'flex', position: "absolute", zIndex: "-1", flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1645004007684-ad33ec959f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)' }}>
            <div style={{ color: 'white' }}>
                <h1 style={{ textAlign: 'center' }}>404</h1>
                <h2>Упс! Такой страницы не существует :(</h2>
            </div>
        </div>
    )
}

export default Error