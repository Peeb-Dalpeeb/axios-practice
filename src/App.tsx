import { UserList } from './components/ui/UserList'
import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6', 
      paddingTop: '60px',
      paddingBottom: '60px'
    }}>
      <UserList />
    </div>
  )
}

export default App

