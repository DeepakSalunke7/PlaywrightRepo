pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-tests .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'docker run --rm playwright-tests'
            }
        }
    }
}