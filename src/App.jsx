
import './App.css'
import HookForm from './Custom Hoock/HookForm'
import IndividualFormState from './IndividualFormState/IndividualFormState'
import RefForm from './RefForm/RefForm'
// import SimpleForm from './SimpleForm/SimpleForm'

function App() {
 

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
      <IndividualFormState></IndividualFormState>


<RefForm></RefForm>
<HookForm></HookForm>

      </div>
      
    </>
  )
}

export default App
