import "./styles.css";
import {useState} from 'react'
import {database} from './firebase'
import {collection , addDoc } from 'firebase/firestore'
export default function App() {
  const [data, setData] = useState({})
  const databaseRef = collection(database,'Users');
const handleSubmit = (event) =>{
  addDoc(databaseRef,{
message:data,
completed: false,

  }).then(()=>{
    setData('')
  })
}
  return (

    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type='name' value={data} onChange={(event)=> setData(event.target.value)}/>
      <button  onClick={handleSubmit()}>submit</button>
    </div>
  );
}
