import './ErrorHandling.css';

const ErrorHandling = () => (
	<div className="error-container">
		<img src="./img/errorhamster.svg" alt="Image of a hamster with crosses as eyes"/>
		<p>
		Unfortunately it was not possible to retrieve any hamsters from the database. <br/> Try to reload the page or visit us at a later time.
		</p> 
		<button onClick={() => window.location.reload()}>
			Try again
		</button>
	</div>
)

export default ErrorHandling;