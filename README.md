### Add SpaceMonkey and you'll be tracking events on the Server with Astronomer.io without any extra code!

# Setup:
#### If you don't already have [Astronomer setup, do so.](http://docs.astronomer.io/docs/meteor-auto-events-package)
### `meteor add shwaydogg:space-monkey`

# Out of the Box Magic:
* Track all Meteor Method calls from the server
    * Track serverside method *errors* which are logged distinctly
* Track all Logins from the server
    * Also track login **failures** with the **correct user identified** if a matching email is found.

# Details / Options: 
The point of SpaceMonkey is for you not to spend any extra development time adding analytics logic to your code.

Currently by default on the server `Meteor.methods` is monkey patched with a version that will log a the method call to astronomer after success or the error.  If you don't want to monkeypatch `Meteor.methods`, or don't want to track *all* serverside method calls you can turn it off in your meteor settings / environment variables:

    {
      ...
      "spaceMonkey": {
      "monkeyPatchMethods": "false"
      },
      ...
    }

Now you can use `serverTrackedMeteor.methods`, instead of `Meteor.methods`, for the methods you would like to track with astronomer on the server.

# Motivation:
Automatically track logins and method calls on the server to bypass adblockers script blockers!

[Ad Block Plus (ABP)](https://adblockplus.org/) blocks tracking scripts including Astronomer's automatic script it packages together for you on your Meteor client.  An [Adobe & PageFair report](https://blog.pagefair.com/2015/ad-blocking-report/) estimated that in Q2 of 2015 16% of global users were using ad blockers.  Users of your Meteor apps may tend to be tech savvy early adopters, so this number could be much higher!

By adding automatic analytics to the server you can ensure you are tracking all your users, even if they have adblockers installed AND it requires no extra thought!

___

[Meteor Devshop Lightning Talk Slides](http://slides.com/gregoryschwedock/space-monkey)

###### ...Monkey See, Monkey Do...
