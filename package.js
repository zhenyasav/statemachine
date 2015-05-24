Package.describe({

  name: 'zhenya:statemachine',

  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'coffeescript', 
    'templating', 
    'less', 
    'underscore',
    'reactive-var',
    'session',
    'zhenya:boilerplate',
    'zhenya:reveal'], 'client');

  api.addFiles([

    'stateMachine.html',
    'stateMachine.coffee',
    'stateMachine.less',

    'states/text/text.html',
    'states/text/text.coffee',
    'states/text/text.less',
    
    'states/question/question.html',
    'states/question/question.coffee',
    'states/question/question.less'

    ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zhenya:story');
});
