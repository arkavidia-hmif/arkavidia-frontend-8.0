FROM node:current-alpine3.15

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
CMD ["yarn", "start"]

# NGINX CONFIG IF NEEDED

# Config nginx
# FROM nginx:1.15
# COPY --from=build /usr/src/app/ /usr/share/nginx/
# COPY --from=build /tmp /tmp
# COPY /usr/share/nginx/build/ /usr/share/nginx/html/
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Turn on nginx
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]