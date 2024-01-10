import {Button, Stack} from 'react-bootstrap';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Create from './Components/Bankas2/Create';

function App() {

    const [newAccount, setNewAccount] = useState([]);
    const [createData, setCreateData] = useState(null);
      return (
        <>
        <Container className='my-4'>
            <Stack direction='horizontal' gap='2' className="mb-4">
            <h3 className="me-auto">Sąskaitų sąrašas</h3>
            <Button variant='primary'>+ Create New Account</Button>
            </Stack>
        </Container>
        <Create/>
        </>
      )
}

export default App;