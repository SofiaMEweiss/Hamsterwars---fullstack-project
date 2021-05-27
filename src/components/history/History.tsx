import { useState } from 'react'
 
const History = () => {
    const [inputText, setInputText] = useState ('default')
    return (
    <div>
        <h1> Lägg till ny hamster </h1>
        <section>
            <p> 
                <label> Namn: 
                <input onChange={event =>{
                    console.log('Controlled change', event.target.value);setInputText(event.target.value)
                }}
                value={inputText}
                />
                </label>
            </p>
        </section>
    </div>
)}
            
 
export default History