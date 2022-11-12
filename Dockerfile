FROM node:current-alpine3.15

# Install Yarn
RUN yarn install

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app dependency files
ADD package.json /tmp/
ADD yarn.lock /tmp/

# Install packages and link to tmp file
RUN cd /tmp && yarn
RUN cd /usr/src/app && ln -s /tmp/node_modules

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

RUN npx browserslist@latest --update-db

RUN yarn build
CMD [ "yarn", "start" ]

# Docker Command:
# docker pull [nama image]
# docker run -d -p [port host]:[port container] [nama image]
