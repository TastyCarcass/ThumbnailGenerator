(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('Cognito', [function (Cognito) {
            //todo: move somewhere sensible
            AWS.config.region = 'eu-west-1';

            this.pool = new AmazonCognitoIdentity.CognitoUserPool({
                UserPoolId : 'eu-west-1_ClavJ1xvM',
                ClientId : 'leu49fpjc3tfegchnqe2g57gl'
            });

            this.user = null;

            this.setUser = (username) => {
                return this.user = new AmazonCognitoIdentity.CognitoUser({
                    Username: username,
                    Pool: this.pool
                });
            };

            this.setAWSCredentials = (JwtToken) => {
                console.log('setting credentials', JwtToken, AWS.config.credentials);
                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId : 'eu-west-1:f4808084-b820-48af-b19d-e50bde32efbb',
                    Logins : {
                        'cognito-idp.eu-west-1.amazonaws.com/eu-west-1_ClavJ1xvM' : JwtToken
                    }
                });
            };

            this.getCurrentUser = () => {
                this.user = this.pool.getCurrentUser();

                if (this.user != null) {
                    this.user.getSession((err, session) => {
                        if (err) {
                            alert(err.message || JSON.stringify(err));
                            return;
                        }

                        console.log('session validity: ' + session.isValid());

                        // NOTE: getSession must be called to authenticate user before calling getUserAttributes
                        this.user.getUserAttributes(function(err, attributes) {
                            if (err) {
                                // Handle error
                            } else {
                                console.log(attributes);
                            }
                        });

                        this.setAWSCredentials(session.getIdToken().getJwtToken());
                    });
                } else {
                    console.log('not valid sesh');
                }
            };

            this.authenticateUser = (username, password) => {
                this.getCurrentUser();

                var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
                    Username: username,
                    Password: password
                });

                if (!this.user) {
                    this.setUser(username);
                } else {
                    console.log('already a user', this.user);
                    this.user;
                }

                this.user.authenticateUser(authenticationDetails, {
                    onSuccess: function (result) {
                        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
                        AWS.config.region = 'eu-west-1';
                        this.setAWSCredentials(result.getIdToken().getJwtToken());

                        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
                        console.log('needs refresh?', AWS.config.credentials.needsRefresh());
                        AWS.config.credentials.refresh((error) => {
                            if (error) {
                                console.error('fail', error);
                            } else {
                                // Instantiate aws sdk service objects now that the credentials have been updated.
                                // example: var s3 = new AWS.S3();
                                console.log('Successfully logged!', this.user, AWS.config.credentials.needsRefresh());
                            }
                        });
                    }.bind(this),

                    onFailure: function(err) {
                        alert(err.message || JSON.stringify(err));
                    }
                });
            };

            this.confirmUser = (username, code) => {
                if (!this.user) {
                    this.user = new AmazonCognitoIdentity.CognitoUser({
                        Username: username,
                        Pool: this.pool
                    })
                }

                Cognito.user.confirmRegistration(code, true, function (err, result) {
                    if (err) {
                        alert(err.message || JSON.stringify(err));
                        return;
                    }
                    console.log('call result: ' + result);
                });
            };

            this.signOut = () => {
                if (this.user) {
                    this.user.signOut();
                }
            };

            this.globalSignOut = () => {
                if (this.user) {
                    this.user.globalSignOut();
                }
            };

            this.isLoggedIn = () => {
                return this.user;
            }
        }])
})();