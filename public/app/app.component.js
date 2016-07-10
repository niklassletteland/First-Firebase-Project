(function(app) {
  	app.AppComponent =
    	ng.core.Component({
     		selector: 'first-firebase-project',
      		template: `
      			<h1>Angular/Firebase App</h1>
      			<button *ngIf="!user" (click)="login()">Login</button>
      			<p *ngIf="user">Logged in as {{ user.displayName }}</p>
      		`
    	})
    	.Class({
      		constructor: function() {

      			var self = this;

      			// Initialize Firebase
				var config = {
					apiKey: "AIzaSyC2PwMUnCvccxyTPZBOIO-TStUVKymLwWA",
					authDomain: "first-firebase-project-a3711.firebaseapp.com",
					databaseURL: "https://first-firebase-project-a3711.firebaseio.com",
					storageBucket: "first-firebase-project-a3711.appspot.com",
				};
				firebase.initializeApp(config);

				this.user = null;

				// intialize firebase auth
				var provider = new firebase.auth.GoogleAuthProvider();

				this.login = function() { 
      				console.log('Going to log in.');
      				firebase.auth().signInWithRedirect(provider);
      			}

      			// check auth
				firebase.auth().getRedirectResult().then(function(result) {
					console.log('logged in user:', result.user);
					self.user = result.user;
				}).catch(function(error) {
					console.log('Error logging in:', error);
					alert('Error logging in.');
				});

      		}
    	});
})(window.app || (window.app = {}));
