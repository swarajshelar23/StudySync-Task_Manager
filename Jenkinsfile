pipeline {
    agent any

    options {
        ansiColor('xterm')
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('StudySync-Backend') {
                    script {
                        if (isUnix()) {
                            sh './mvnw -B clean package'
                        } else {
                            bat '.\\mvnw.cmd -B clean package'
                        }
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('studysync-react') {
                    script {
                        if (isUnix()) {
                            sh 'npm install'
                            sh 'npm run build'
                        } else {
                            bat 'npm install'
                            bat 'npm run build'
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'StudySync-Backend/target/*.jar, studysync-react/dist/**', allowEmptyArchive: true
        }
        always {
            cleanWs()
        }
    }
}
