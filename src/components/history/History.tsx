const History = () => (
	<div>
		<h1>Välkommen till History</h1>
	</div>
)

export default History;


// import { useState } from 'react'
// import './History.css';
 
// const History = () => {

//     const [name, setName] = useState ('')
// 	const [age, setAge] = useState ('')
// 	const [favFood, setFavFood] = useState ('')
// 	const [loves, setLoves] = useState ('')
// 	const [imgName, setImgName] = useState ('')

// 	//const [inputText2, setInputText2] = useState ('Hej')

// 	const [controlledName, setControlledName] = useState('')
// 	const [controlledAge, setControlledAge] = useState('')
// 	const [controlledFavFood, setControlledFavFood] = useState('')
// 	const [controlledLoves, setControlledLoves] = useState('')
// 	const [controlledImgName, setControlledImgName] = useState('')
// 	// const [controlledWins] = useState(0)
// 	// const [controlledDefeats] = useState(0)
// 	// const [controlledGames, setControlledGames] = useState(0)




// 	//const [controlledText2, setControlledText2] = useState('')
// 	const [nameTouched, setNameTouched] = useState(false)
// 	const [ageTouched, setAgeTouched] = useState(false)
// 	const [favFoodTouched, setFavFoodTouched] = useState(false)
// 	const [lovesTouched, setLovesTouched] = useState(false)
// 	const [imgNameTouched, setImgNameTouched] = useState(false)

// 	let nameIsValid: boolean = true
// 	let nameErrorMessage: string = ''
// 	if (name === '') {
// 		nameIsValid = false
// 		nameErrorMessage = 'Vänligen skriv din hamsters namn'
// 	}

// 	const allowedAgeCharacters = "0123456789"
// 	let ageIsValid: boolean = true
// 	let ageErrorMessage: string = ''
// 	if (age === '') {
// 		ageIsValid = false
// 		ageErrorMessage = 'Vänligen skriv din hamsters ålder'
// 	} else if (!age.split('').every(char => allowedAgeCharacters.includes(char)))
// { ageIsValid = false
// 	ageErrorMessage ='Vänligen skriv din hamsters ålder med siffror' }

// 	let favFoodIsValid: boolean = true
// 	let favFoodErrorMessage: string = ''
// 	if (favFood === '') {
// 		favFoodIsValid = false
// 		favFoodErrorMessage = 'Vänligen skriv din hamsters favoritmat'
// 	}

// 	let lovesIsValid: boolean = true
// 	let lovesErrorMessage: string = ''
// 	if (loves === '') {
// 		lovesIsValid = false
// 		lovesErrorMessage = 'Vänligen skriv vad din hamster älskar'
// 	}

// 	let imgNameIsValid: boolean = true
// 	let imgNameErrorMessage: string = ''
// 	if (imgName === '') {
// 		imgNameIsValid = false
// 		imgNameErrorMessage = 'Vänligen ange en URL till en bild på en hamster'
// 	}



// 	let nameClass = '';
// 	if (nameTouched) {
// 		nameClass = (nameIsValid ? 'valid' : 'error')
// 	} 

// 	let ageClass = '';
// 	if (ageTouched) {
// 		ageClass = (ageIsValid ? 'valid' : 'error')
// 	} 

// 	let favFoodClass = '';
// 	if (favFoodTouched) {
// 		favFoodClass = (favFoodIsValid ? 'valid' : 'error')
// 	} 

// 	let lovesClass = '';
// 	if (lovesTouched) {
// 		lovesClass = (lovesIsValid ? 'valid' : 'error')
// 	} 

// 	let imgNameClass = '';
// 	if (imgNameTouched) {
// 		imgNameClass = (imgNameIsValid ? 'valid' : 'error')
// 	} 
	
// 	let formIsInvalid = !nameIsValid || !ageIsValid || !favFoodIsValid || !lovesIsValid || !imgNameIsValid



// 	async function postHamster() {
        
//         const newHamster = {
       
// 			'name': controlledName,
// 			'age': Number(controlledAge),
// 			'favFood': controlledFavFood,
// 			'loves': controlledLoves,
// 			'imgName': controlledImgName,
// 			'wins': 0,
// 			'defeats': 0,
// 			'games': 0
//         }

//         const response = await fetch('/hamsters', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
			
//             body: JSON.stringify(newHamster)
//         })
        
//     }





//     return (
//     <div className="form">
// 		<div className="form-section">
//         <h1> Lägg till ny hamster </h1>
//         <section>
             
//                 <label> Namn <br />
//                 <input type="text" onBlur = {() => setNameTouched(true)} onChange={event =>{
//                     console.log('Controlled change', event.target.value);
// 					setName(event.target.value)
// 					setControlledName(event.target.value)
// 					//toUpperCase()
//                 }}
//                 value={name}
// 				className={nameClass}
//                 />
//                 </label>
// 				{nameTouched ? 	<div className='message-hidden'>{nameErrorMessage}</div> : null }
// </section>

// <section>
             
//                 <label> Ålder <br />
//                 <input type="text" onBlur = {() => setAgeTouched(true)} onChange={event =>{
//                     console.log('Controlled change', event.target.value);
// 					setAge(event.target.value)
// 					setControlledAge(event.target.value)
					
//                 }}
//                 value={age}
// 				className={ageClass}
//                 />
//                 </label>
// 				{ageTouched ? 	<div className='message-hidden'>{ageErrorMessage}</div> : null }
// </section>

// <section>
             
// 			 <label> Favoritmat <br />
// 			 <input type="text" onBlur = {() => setFavFoodTouched(true)} onChange={event =>{
// 				 console.log('Controlled change', event.target.value);
// 				 setFavFood(event.target.value)
// 				 setControlledFavFood(event.target.value)
				 
// 			 }}
// 			 value={favFood}
// 			 className={favFoodClass}
// 			 />
// 			 </label>
// 			 {favFoodTouched ? 	<div className='message-hidden'>{favFoodErrorMessage}</div> : null }
// </section>

// <section>
             
// 			 <label> Älskar <br />
// 			 <input type="text" onBlur = {() => setLovesTouched(true)} onChange={event =>{
// 				 console.log('Controlled change', event.target.value);
// 				 setLoves(event.target.value)
// 				 setControlledLoves(event.target.value)
				 
// 			 }}
// 			 value={loves}
// 			 className={lovesClass}
// 			 />
// 			 </label>
// 			 {lovesTouched ? 	<div className='message-hidden'>{lovesErrorMessage}</div> : null }
// </section>

// <section>
             
// 			 <label> Bild <br />
// 			 <input type="text" onBlur = {() => setImgNameTouched(true)} onChange={event =>{
// 				 console.log('Controlled change', event.target.value);
// 				 setImgName(event.target.value)
// 				 setControlledImgName(event.target.value)
				 
// 			 }}
// 			 value={imgName}
// 			 className={imgNameClass}
// 			 />
// 			 </label>
// 			 {imgNameTouched ? 	<div className='message-hidden'>{imgNameErrorMessage}</div> : null }
// </section>





// {/* <section>
			 
//                 <label> Ålder: 
//                 <input type="number" className="valid" onChange={event =>{
//                     console.log('Controlled change 2', event.target.value);
// 					if( !event.target.value.endsWith('0'))
// 					setInputText2(event.target.value); setControlledText2(event.target.value)
//                 }}
//                 value={inputText2}
//                 />
//                 </label>
// 				<br/>
// 				Ålder: {controlledText2}
            

			

//         </section> */}
// 		<div>
// 			<button disabled ={formIsInvalid} onClick={postHamster}>Posta ny hamster</button>
// 		</div>


// 		</div>
// 		<div className="form-section">
// 		<h1> Din nya hamster </h1>
// 		<p><span>Namn:</span> {controlledName}</p>
// 		<p><span>Ålder:</span> {controlledAge}</p>
// 		<p><span>Favoritmat:</span> {controlledFavFood}</p>
// 		<p><span>Älskar:</span> {controlledLoves}</p>
// 		<p><span>bild:</span><img src={controlledImgName} /></p>
// 		</div>
//     </div>
// )}
            
 
// export default History