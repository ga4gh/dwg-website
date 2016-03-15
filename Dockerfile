FROM debian:8

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get -yq install \
    npm git

RUN cd /usr/bin && ln -s nodejs node

RUN cd / && git clone https://github.com/ga4gh/dwg-website.git

RUN cd /dwg-website && npm install

RUN cd /dwg-website && npm install bower && node_modules/bower/bin/bower install --allow-root

RUN cd /dwg-website && npm install http-proxy

RUN cd /dwg-website && node_modules/gulp/bin/gulp.js

CMD cd /dwg-website && node_modules/gulp/bin/gulp.js serve
