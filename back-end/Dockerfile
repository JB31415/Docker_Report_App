#Use newest node version
FROM node:23.10.0

#Create app directory
WORKDIR /usr/src/app

#Copy needede files
COPY package*.json app.js ./

#Install dependencies
RUN npm install

#Use port 4000
EXPOSE 8080

#Run the app
CMD ["node", "app.js"]