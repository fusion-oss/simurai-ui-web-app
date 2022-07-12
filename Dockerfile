#This Dockerfile is running by circle ci with merge in master
#To Create and publish the image PLEASE UPDATE THE VERSION!
#docker build -f Dockerfile -t scoperetail.azurecr.io/simurai-ui-web-app:0.0.1 .
#docker push scoperetail.azurecr.io/simurai-ui-web-app:0.0.1

FROM node:14.17.0 AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . ./
RUN ls -l
RUN npm run build
RUN ls -l

FROM nginx:1.22-alpine
COPY --from=build /app/build /usr/share/nginx/html

#Setup Permissions
RUN touch /var/run/nginx.pid
COPY nginx/nginx.conf /etc/nginx/nginx.conf


#ENV VARS
#COPY env-setup.sh /usr/share/nginx/env-setup.sh 
#COPY default.env /usr/share/nginx/default.env 

#USER
RUN addgroup scopeGroup -g 1000 && adduser -S scope -G scopeGroup -u 1000


RUN chown scope:scopeGroup -R /var/cache/nginx && chown scope:scopeGroup -R /usr/share/nginx && chown scope:scopeGroup -R /var/log/nginx && chown scope:scopeGroup /var/run/nginx.pid 
RUN chmod 776 -R /usr/share/nginx && chmod 776 -R /var/log/nginx && chmod 776 /var/run/nginx.pid 
USER scope
EXPOSE 8080

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/env-config-template.js > /usr/share/nginx/html/env-config.js && exec nginx -g 'daemon off;'"]








