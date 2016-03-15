GA4GH Data Working Group website
================================

The official GA4GH Data Working Group (DWG) website is hosted at [ga4gh.org](http://ga4gh.org).


### Installation

```
$ npm install
$ bower install
$ gulp serve
```

#### Using Docker

```
$ docker build -t dwg-website .
$ docker run --name=dwg-website dwg-website
$ docker exec -ti dwg-website /bin/bash
```

Once inside the container, `cd /dwg-website`.  Suggested workflow is to make
changes externally and use `git pull` to pull them in for testing.
