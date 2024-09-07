import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './utils/globalState.jsx'

import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
)
