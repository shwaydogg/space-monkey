if(Meteor.settings.spaceMonkey && Meteor.settings.spaceMonkey.monkeyPatchMethods != "false"){
  Meteor.methods = serverTrackedMeteor.methods; 
}

Accounts.onLogin(function(props){
  if(Meteor.isServer){
    props.server = true;
    analytics.track({
        userId: Meteor.userId(),
        event: "Login success on Server",
        properties: props,
    });
  }
});

Accounts.onLoginFailure(function(props){
  if(Meteor.isServer){
    var email, user;
    if(props.methodArguments && props.methodArguments[0] && props.methodArguments[0].user){
      email = props.methodArguments[0].user.email;
      check(email, String);
      props.email = email;
    }
    user = Meteor.users.findOne({"emails.address": email});
    props.server = true;
    analytics.track({
        userId: user ? user._id : 'anonymousId',
        event: "Login failure on Server",
        properties: props,
    });
  }
});
