# Specify a base image
FROM node:alpine

# Container relative path
WORKDIR /usr/app

# Install some depenendencies
# The only thing that the container needs to run properly, is the package.json, not the index.js
# package.json needs to be available *before* npm install
# Instead of first copying everything, copy just package.json
# Then second copy after RUN, with aim to reuse images (only second COPY will vary when update the files locally)
COPY ./package.json ./
RUN npm install
# After npm install, copy over everything else
# Changes to index.js will thus not invalidate the steps above! (The cashed versions of the images will be reused - in a production project a rebuuild of one step can take minutes)
COPY ./ ./

# Default command
CMD ["npm", "start"]