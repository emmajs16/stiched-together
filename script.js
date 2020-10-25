

var firebaseConfig = {
  apiKey: "AIzaSyC79gkr87G20gdzLW3aIiReC6wtBm-9hOA",
  authDomain: "stitched-together.firebaseapp.com",
  databaseURL: "https://stitched-together.firebaseio.com",
  projectId: "stitched-together",
  storageBucket: "stitched-together.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "1:396760913031:web:07b2ee471d257c1b769422",
  measurementId: "G-MEASUREMENT_ID",
};
 firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.analytics();
var db = firebase.firestore();


function receive() {
    var localMessages = []
		var globalMessages = []
    console.log("receive!")
    db.collection("posts").get().then(function(snapshot) {
        snapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            post = [doc.data().subject, doc.data().message,doc.data().local];
						if(post[2]){
							localMessages.push(post)
						}
						else{
							globalMessages.push(post)
						}
        });
    })
    setTimeout(function() {
       localMessages.forEach(function(post){
				 var newPost = document.createElement('div')
				 newPost.innerHTML =`<h3>${post[0]}</h3><p>${post[1]}</p>` 
				 newPost.setAttribute("class", "post");
				 console.log(newPost)
				 document.getElementById("localPost").appendChild(newPost)
			 })
			  globalMessages.forEach(function(post){
				 var newPost = document.createElement('div')
				 newPost.innerHTML =`<h3>${post[0]}</h3><p>${post[1]}</p>` 
				 newPost.setAttribute("class", "post");
				 console.log(newPost)
				 document.getElementById("globalPost").appendChild(newPost)
			 })
    }, 500)
		

}


function submit() {
    var message = document.getElementById("message").value
    var subject = document.getElementById("subject").value
		var local = document.getElementById("local").checked
    db.collection("posts").doc(message).set({
            subject: subject,
            message: message,
						local: local
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
				var subject = document.getElementById("subject").value = ""
        var message = document.getElementById("message").value = ""
				var local = document.getElementById("local").value = ""

}


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

// Is there an email link sign-in?
if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', uiConfig);
}

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'profile.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: 'profile.html',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'

};
ui.start('#firebaseui-auth-container', uiConfig);

// var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

function marketResearch(){
	var dot = document.getElementById("MRdot");
	dot.classList.add('finished');
}
function businessPlan(){
	var dot = document.getElementById("BPdot");
	dot.classList.add('finished');
}
function fundBusiness(){
	var dot = document.getElementById("FBdot");
	dot.classList.add('finished');
}
function businessLocation(){
	var dot = document.getElementById("BLdot");
	dot.classList.add('finished');
}
function businessStructure(){
	var dot = document.getElementById("BSdot");
	dot.classList.add('finished');
}
function businessName(){
	var dot = document.getElementById("BNdot");
	dot.classList.add('finished');
}
function registerBusiness(){
	var dot = document.getElementById("RBdot");
	dot.classList.add('finished');
}
function taxId(){
	var dot = document.getElementById("TIdot");
	dot.classList.add('finished');
}
function applyLicenses(){
	var dot = document.getElementById("ALdot");
	dot.classList.add('finished');
}
function openBank(){
	var dot = document.getElementById("OBdot");
	dot.classList.add('finished');
}
function celebrate(){
	var dot = document.getElementById("Cdot");
	dot.classList.add('finished');
}

// parallax?
// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});