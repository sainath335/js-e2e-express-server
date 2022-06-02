const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl : 'http://172.31.4.52:9000/',
    options: {
      'sonar.projectName': 'SONAR_LATEST',
      'sonar.projectDescription': 'SONAR_LATEST project...',
      'sonar.sources': '.',
      'sonar.login': 'admin',
      'sonar.password': 'admin@321',      
      'sonar.language' : 'js',
      'sonar.projectVersion': '1.0'
    },
  },
  () => process.exit()
);