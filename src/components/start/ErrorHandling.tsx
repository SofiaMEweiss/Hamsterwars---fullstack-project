import './ErrorHandling.css';

const ErrorHandling = () => (
	<div className="error-container">
		<img src="./img/errorhamster.svg" alt="En bild på en hamster med kors till ögon"/>
		<p>
			Tyvärr gick det inte att hämta några hamstrar från databasen. <br/> Försök att ladda om sidan igen eller testa att besöka oss vid ett senare tillfälle.
		</p> 
		<button onClick={() => window.location.reload()}>
			Försök igen
		</button>
	</div>
)

export default ErrorHandling;