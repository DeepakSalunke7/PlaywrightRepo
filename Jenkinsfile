pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/DeepakSalunke7/PlaywrightRepo.git'
            }
        }

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