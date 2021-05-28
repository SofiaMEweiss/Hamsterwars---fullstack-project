import { useState } from 'react'
import './History.css';
 
const History = () => {

    const [name, setName] = useState ('')
	const [inputText2, setInputText2] = useState ('Hej')

	//Ändra till name sen
	const [controlledText, setControlledText] = useState('')
	const [controlledText2, setControlledText2] = useState('')
	const [nameTouched, setNameTouched] = useState(false)

	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if (name === '') {
		nameIsValid = false
		nameErrorMessage = 'Vänligen skriv din hamsters namn'
	}


	let nameClass = '';
	if (nameTouched) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	} 
	
	let formIsInvalid = !nameIsValid

    return (
    <div className="form">
        <h1> Lägg till ny hamster </h1>
        <section>
             
                <label> Namn: 
                <input type="text" onBlur = {() => setNameTouched(true)} onChange={event =>{
                    console.log('Controlled change', event.target.value);
					setName(event.target.value.toUpperCase())
					setControlledText(event.target.value)
					//toUpperCase()
                }}
                value={name}
				className={nameClass}
                />
                </label>
				{nameTouched ? 	<div className='message-hidden'>{nameErrorMessage}</div> : null }
			
				<br/>
				Namn: {controlledText}
            
</section>
<section>
			 
                <label> Ålder: 
                <input type="number" className="valid" onChange={event =>{
                    console.log('Controlled change 2', event.target.value);
					if( !event.target.value.endsWith('0'))
					setInputText2(event.target.value); setControlledText2(event.target.value)
                }}
                value={inputText2}
                />
                </label>
				<br/>
				Ålder: {controlledText2}
            

			

        </section>
		<div>
			<button disabled ={formIsInvalid}>Posta ny hamster</button>
		</div>
    </div>
)}
            
 
export default History