Package.describe({
  name: 'warrenmcquinn:meteor-babylon',
  summary: 'Meteor package for Babylon.js 3D engine.',
  version: '1.0.2',
  git: 'https://www.github.com/warrenmcquinn/meteor-babylon.git'
});

Package.onUse(function(api) {
	api.imply('templating@1.0.8');
  api.addFiles('babylon.1.14-RC.js','client');
  api.export('BABYLON','client');
});

