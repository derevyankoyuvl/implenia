 pipeline {
   agent any
   stages {
     stage('automationTests') {
       steps {
         script: npm install
       }
       steps {
                script: npm run codeceptjs
              }
     }

   }
 }