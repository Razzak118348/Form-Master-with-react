
import './App.css'
import Grand from './ContextApi/Grand';
import ReusableComponent from './Reusable Form/ReusableComponent'
// import HookForm from './Custom Hoock/HookForm'
// import IndividualFormState from './IndividualFormState/IndividualFormState'
// import RefForm from './RefForm/RefForm'
// import SimpleForm from './SimpleForm/SimpleForm'

function App() {
 const handleSignUpSubmit = data =>{
  console.log('sign Up data',data);
 }

 const handleUpdateProfile = data =>{
 console.log('update profile data', data)
 }
  return (
    <>
     
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
      {/* <IndividualFormState></IndividualFormState> */}


{/* <RefForm></RefForm> */}
{/* <HookForm></HookForm> */}

<ReusableComponent  handleSubmit={handleSignUpSubmit}>
  <div>
    <h2 className='text-xl'>Sign Up</h2>
    <p>Please sign Up</p>
  </div>
</ReusableComponent>
<ReusableComponent 
  handleSubmit={handleUpdateProfile} submitBtnText='Update'>
  <div>
    <h2 className='text-xl'>Update profile </h2>
    <p>Please Update your data </p>
  </div>
</ReusableComponent>

      </div>6w.
      

      <div>
        <Grand></Grand>
      </div>
    </>
  )
}

export default App;
