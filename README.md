# Octopus

* Backend: [![Build Status](https://tci.tikal.io/job/octopus-backend/job/master/badge/icon)](https://tci.tikal.io/job/octopus-backend/job/master/)

* Frontend:[![Build Status](https://tci.tikal.io/job/octopus-frontend/job/master/badge/icon)](https://tci.tikal.io/job/octopus-backend/job/master/)

## ci-cd process

Multibranch piepline driven by `./backend/Jenkinsfile` and `./frontend/Jenkinsfile` and runs on [https://tci.tikal.io](https://tci.tikal.io)

![Imgur](https://i.imgur.com/DpnVlOQ.png?1)

Routing ("serice mesh") done by Treafik:

![Imgur](https://i.imgur.com/Z1vChe3.png) 
### build phase

* Create Docker Image

    ```groovy
    stage('Build') {
    steps {
        script {
            dir("frontend") {
                docker.build("$IMAGE")
                docker.build("$IMAGE_LATEST")
            }
        }
    }
    }
    ```

* Push to DockerHub - the difference is `master` overrides the `latest` tag other branches just create a new release with the commit hash.

    See on docker hub [octopus-be](https://cloud.docker.com/u/tikal/repository/docker/tikal/octopus-be) and [octopus-fe](https://cloud.docker.com/u/tikal/repository/docker/tikal/octopus-be) for more info.

    ![Imgur](https://i.imgur.com/ZZhtrAP.png)  

    ```groovy
    stage('Publish (master)') {
    when {
        branch 'master'
    }
    steps {
        script {
            withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
                // version eq latest git tag
                docker.image(IMAGE).push()
                // override the latest tag
                docker.image(IMAGE_LATEST).push()
            }
        }
    }
    }
    ```

* Publish/Deploy automatically on push

    So we did a trick to utlize an already running Treafik instance.
    Treafik resides on a network `tci_tciserver` which is external to the stack so we have a hack in the `docker-compose.yml` which takes care of a few things (this referrres to both backend and fronent) 

    making sure the forente / backend are on the same network as traefik like so:
    
    ```yaml
    tci_tciserver:
        external: true
    ```

    which we then use in the container itself like so:

    ```yaml
    networks:
      - tci_tciserver
    ```

    and the magic of Let's encrypt is done by `treafik` which is already running on the server so the labels tell traefik to serve it like so:

    ```yaml
    labels:
      traefik.enable: "true"
      traefik.port: "80"
      traefik.frontend.passHostHeader: "true"
      traefik.frontend.rule: "Host:octopus.tikal.io"
    ```

    In other words this was designed to work with our existing setup and may need some change if we move away from this server.

    So once all this magic is done our `frontend/docker-compose.yml` looks like:

    ```yaml
    version: '2'
    networks:
    tci_tciserver:
        external: true

    services:
      octopus-fe:
      build: .
        image: tikal/octopus-fe:latest
        expose:
        - 82
      ports:
        - 82:80
      labels:
        traefik.enable: "true"
        traefik.port: "80"
        traefik.frontend.passHostHeader: "true"
        traefik.frontend.rule: "Host:octopus.tikal.io"
      networks:
        - tci_tciserver
      restart: always
    ```

    And simlar to that the `backend/docker-compose.yml`:

    ```yaml
    version: '2'

    networks:
      tci_tciserver:
          external: true

    services:
      octopus-be:
        build: .
        image: tikal/octopus-be:latest
        expose:
          - 3333
        ports:
          - 3333:3333
        environment:
          GOOGLE_API_CLIENT_SECRET: '************************'
          GOOGLE_API_CLIENT_ID: '************************'
          GOOGLE_API_REDIRECT_URI: '***********************'
        labels:
          traefik.enable: "true"
          traefik.port: "3333"
          traefik.frontend.passHostHeader: "true"
          traefik.frontend.rule: "Host:octopus-be.tikal.io"
        networks:
          - tci_tciserver
        restart: always
    ```

Upon successdul build you should be able to access the latest deployment via [https://octopus.tikal.io](https://octopus.tikal.io)