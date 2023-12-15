
import './App.css';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const CurrentUser = createContext()

function App() {



  const [theme,setTheme] = useState("light");
   const [User,SetUser] = useState(null);

   
  return (
    <div className="App">

      
    <ThemeContext.Provider value={theme}>
      <CurrentUser.Provider value={{User,SetUser}}>


      <WelcomePanel >

          
        <input type='checkbox' value={theme==="dark"} onChange={(e)=>{
        setTheme( (e.target.checked)? "dark": "light")
        }}></input>

        {theme}


        </WelcomePanel>

      </CurrentUser.Provider>
       
    </ThemeContext.Provider>
    </div>
  );
}

export default App;

function WelcomePanel({children})
{

  const User = useContext(CurrentUser);
  
  return(
    <>
    <Panel title="Welcome">
       { (false)? <Greet/> :<LoginForm/>}
    </Panel>
      {children}
    </>
  )
}

function Greet()
{
 
  const {User} = useContext(CurrentUser)
  return(
    <>
    <h1>{User.name} </h1>
    </>
  )
}


function Panel({title,children})
{
  const theme = useContext(ThemeContext)
  const className = "panel-"+theme;// panel-dark
  return(
   <section  className={className}>
    <h1>{title}</h1>
    {children}
   </section>
  )
}

function LoginForm()
{
  const {SetUser} = useContext(CurrentUser);
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
 const canLogin =  fname!=="" && lname!=="";
  return(
    <>    
    <label>Firstname: </label>
    <input type='text' value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>

    <label>Lastname: </label>
    <input type='text' value={lname} onChange={(e)=>{setLname(e.target.value)}}></input>

    <Button disabled={!canLogin} onclick={()=>{
      SetUser({
        name:fname + " " +lname
      })
    }}>
      Login
    </Button>    
    </>
  )
}

function Button({onclick,disabled,children})
{
  return(
    <>
      <button    onClick={onclick}   disabled={disabled}
      >
        {children}

      </button>
    </>
  )
}
