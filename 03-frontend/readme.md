
## Dockerfile.dev
- Template for copying the project
- CMD: npm start

## docker-compose.yml
- For dev
- Uses the Dockerfile.dev template
- One for the dev server
- One for the test runner (overrides the default command/CMD)

## Dockerfile
- For prod
- Uses multi-steb builds: NGINX on Alpine with built project

## .travis.yml
- Dockerfile.dev for running tests
- Dockerfile for prod
