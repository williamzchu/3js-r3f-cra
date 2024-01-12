import "./style.css"
import App from './app.jsx'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.querySelector("#root"))

root.render(
    <div>
        <App clickersCount={4}/>
    </div>
)