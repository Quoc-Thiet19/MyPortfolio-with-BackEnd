
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import { AuthProvider } from './context/AuthContext';
import backgroundImage from './assets/background.png';
const App = () => {
    return (
        <div className="app-background" style={{ '--site-background': `url(${backgroundImage})` }}>
            <div className="app-content">
                <AuthProvider><Router><MainRouter /></Router></AuthProvider>
            </div>
        </div>
    );
};
export default App;
