const admin = require("firebase-admin");

let privateKey;

if(process.env.PRIVATE_KEY) {
	//På heroku
	privateKey = JSON.parse(process.env.PRIVATE_KEY)
} else {
	// Lokalt, på min dator
	privateKey = require("./firebase-private-key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(privateKey)
});

function getDatabase(){
	return admin.firestore();
}

module.exports = getDatabase;