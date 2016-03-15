Package.describe({
  name: 'shwaydogg:space-monkey',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Space Monkey brings the magic of Astronomer analytics to the Server!',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/shwaydogg/space-monkey',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-password');
  api.addFiles('spacemonkey.js');
  api.addFiles('server/methodMonkey.js');
  api.export('serverTrackedMeteor');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('shwaydogg:space-monkey');
});
