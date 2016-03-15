serverTrackedMeteor = {};
serverTrackedMeteor.methods = (function(original){
  if(Meteor.isServer){
    return function(){
      var args =  {};
      _.each(arguments[0], (method, name)=>{
        args[name] = (function(original){
          return function(){
            var result, props = {server: true};
            try {
              //throw new Meteor.Error('error', 'reason', 'details');//Just for testing error catching.
              result = original.apply(this, arguments);
            } catch(e){
              props.error = true;
              if(e.details) props.errorDetails = e.details;
              if(e.reason) props.errorReason = e.reason;
              if(e.error) props.errorError = e.error;
              props.errorObject = e;
            }
            analytics.track({
                userId: Meteor.userId(),
                event: (props.error ? 'ERROR in ': 'Called ') + name  + ' Method on Server',
                properties: props,
            });
            return result;
          }
        })(method);
      });
      return original.call(this, args);
    }
  }else{
    return Meteor.methods;
  }
})(Meteor.methods);
