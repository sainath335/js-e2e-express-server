pipeline {
    agent { label 'build_java_11' }
    triggers { pollSCM('* * * * *') }
    stages {
        stage('SourceCode') {
            steps {
                git branch: 'master', url: 'https://github.com/MattsManoj/js-e2e-express-server.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npm test'
            }
        }
    
    }
}