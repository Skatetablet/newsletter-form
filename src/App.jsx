import componentPhoto from './assets/images/illustration-sign-up-desktop.png';
import msgPhoto from './assets/images/icon-success.png';
import './App.css'
import { useState } from 'react';

export const App = () => {

    const [data, setData] = useState({email: "",}) 
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
        
    }

    const formHidden = () => {
        const form = document.querySelector("#container");
        const msg = document.querySelector("#containerMsg");
       form.classList.add("hidden")
       msg.classList.remove("hidden")
    }

    const msgHidden = () => {
        const msg = document.querySelector("#containerMsg");
        const form = document.querySelector("#container");
        msg.classList.add("hidden")
        form.classList.remove("hidden")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(data.email);
       formHidden();
    }

  return (
    <>
        <div className="container hidden" id='container'>
            <div className="text">
                <h1>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="check">
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" placeholder='email@company.com' value={data.email} onChange={handleChange}/>
                    <button type='submit'>Subscribe to monthly newsletter</button>
                </form>
            </div>
            <div className="img">
                <img src={componentPhoto} alt="IMG PRUEBA" srcset="" />
            </div>
            
        </div>
        <div className="containerMsg " id='containerMsg'>
            <img src={msgPhoto} alt="IMG SUCCESS" srcset="" />
            <h1>Thanks for suscribing!</h1>
            <p>A confirmation email has been sent to <strong>{data.email}</strong>. Please open it and click the button inside to confirm your suscriptionn</p>
            <button onClick={msgHidden}>Dismiss message</button>
        </div>
        
    </>
  )
}
