# DataViser

A Liftoff Hackathon project for visualizing data in maps.

How to setup grafana at local env:

1. Build grafana pannel plugin under dataviser-grafana-panel-plugin:
```sh
dataviser-grafana-panel-plugin % yarn watch
```

2. Run the following shell to setup local grafana and access http://localhost:3000 admin/admin to login Grafana.
```sh
./run_grafana.sh
```

3. Create new pannel and add dataviser-grafana-panel-plugin.
