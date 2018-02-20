#!/bin/bash
    if [ "$1" = "development" ]; then
      docker login --username="$HEROKU_LOGIN" --password="$HEROKU_API_KEY" registry.heroku.com
      docker build --rm=false -t registry.heroku.com/crypto-calculator-dev/web:latest .
      docker push registry.heroku.com/crypto-calculator-dev/web:latest
    fi

    if [ "$1" = "production" ]; then
      docker login --username="$HEROKU_LOGIN" --password="$HEROKU_API_KEY" registry.heroku.com
      docker build --rm=false -t registry.heroku.com/crypto-calculator/web:latest .
      docker push registry.heroku.com/crypto-calculator/web:latest
    fi