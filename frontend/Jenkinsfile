pipeline {
  environment {
    registryFrontend =  'linea/backward'
    registryCredential = 'Dockerhub'
    deployment = 'backward'
    namespace = 'backward'
    dockerImage = ''
    GIT_COMMIT_SHORT = sh(
      script: "printf \$(git rev-parse --short ${GIT_COMMIT})",
      returnStdout: true
    )
  }
  agent any
  stages {
    stage('Creating version.json') {
      steps {
        sh './version.sh && cat ./src/assets/json/version.json'
      }
    }
    stage('Build Images') {
      steps {
        script {
          dockerImage = docker.build registryFrontend + ":$GIT_COMMIT_SHORT"
        }
      }
    }
    stage('Push Images') {
      when {
        expression {
          env.BRANCH_NAME.toString().equals('main')
        }
      }
      steps {
        script {
          if (env.BRANCH_NAME.toString().equals('main')) {
            // No caso de um merge em main
            // Faz o push da imagem também como latest.

            docker.withRegistry('', registryCredential) {
              dockerImage.push()
              dockerImage.push("latest")
            }
          }
        }
        //  Para merges em qualquer branch faz o push apenas da imagem com o hash do commit.
        script {
          docker.withRegistry('', registryCredential) {
            dockerImage.push()
          }
        }
      }
    }
  }

  // post {
  //   always {
  //     sh "docker rmi $registryFrontend:$GIT_COMMIT_SHORT --force"
  //     sh "docker rmi $registryBackend:$GIT_COMMIT_SHORT --force"
  //     sh """
  //       curl -D - -X \"POST\" \
  //       -H \"content-type: application/json\" \
  //       -H \"X-Rundeck-Auth-Token: $RD_AUTH_TOKEN\" \
  //       -d '{\"argString\": \"-namespace $namespace -commit $GIT_COMMIT_SHORT -image $registryBackend:$GIT_COMMIT_SHORT -deployment $deployment\"}' \
  //       https://fox.linea.gov.br/api/1/job/8e7751cc-489d-45e5-93bf-8164be71a15d/executions
  //     """
  //   }
  // }
}
