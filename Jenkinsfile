pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies and building application'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running SonarQube code quality analysis'
                echo 'SonarQube analysis placeholder'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
