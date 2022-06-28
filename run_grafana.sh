#!/bin/sh
docker run -d -p 3000:3000 -v "$(pwd)"/dataviser-grafana-panel-plugin:/var/lib/grafana/plugins -e GF_DEFAULT_APP_MODE=development --name=grafana grafana/grafana:8.5.3
