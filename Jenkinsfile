pipeline {
  agent any
  stages {
    stage('autoTests') {
      steps {
        build 'AutoionTestsAtReview'
        sh 'npm install'
        sh 'npm run codeceptjs'
      }
    }

  }
}