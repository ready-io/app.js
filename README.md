# Base node.js app

### Prerequisites

- Node.js 
- Docker 
- Docker compose

### Getting started

download dependencies

```bash
npm install
```

build the app

```bash
npm run build
```

start the app (development)

```bash
npm run serve
```

use the next command as a shortcut for build and start

```bash
npm run start
```

### Deployment

after build and upload files to the server, start the app using a docker container

```bash
cmd/start
```

stop container

```bash
cmd/stop
```

