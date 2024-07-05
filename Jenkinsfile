pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your/repo.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp -r * /home/roadma8/apps/contabo-api-test'
            }
        }
    }
}
