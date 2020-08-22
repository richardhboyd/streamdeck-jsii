FROM jsii/superchain AS build
COPY . ./app
WORKDIR ./app

RUN yum install libusb -y
RUN npm install -g jsii-pacmak && npm install && npm run build
RUN jsii-pacmak -t python
RUN jsii-pacmak -t js
RUN jsii-pacmak -t java