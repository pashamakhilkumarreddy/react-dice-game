# Dice game

### To run the application in local
- The application needs atleast node `18.x.xx` to run. If you have `nvm` installed do `nvm use` or manually install the required node version
- `npm i` to install the dependencies
- With hot-reload `npm run start` 

### To run the application in production mode
- `npm run build`

### To run the application in local using Docker (make sure docker is installed)
- `docker build  --no-cache -f ./Dockerfile -t dice-app .`
- `docker run -dp 80:80 --rm --env NODE_ENV=production --name my-dice-app dice-app`

### To push the images to docker hub
- `docker buildx create --name mydockerbuilder --driver docker-container --bootstrap`
- `docker buildx use mydockerbuilder`
- `docker buildx inspect`
- `docker login --username <docker-hub-username> --password <docker-hub-password>`
- `docker buildx build --no-cache --platform=linux/arm64 --platform=linux/amd64 -t docker.io/<docker-hub-username>/<image-name>:<tag> --push -f ./Dockerfile .` or
- `docker build --no-cache --platform=linux/arm64,linux/amd64 -f ./Dockerfile --push -t <docker-hub-username>/<image-name>:<tag> .`
