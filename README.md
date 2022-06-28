# DataViser

A Liftoff Hackathon project for visualizing data in maps.

How to setup grafana at local env:

1. Build grafana pannel plugin under dataviser-grafana-panel-plugin:
```sh
dataviser-grafana-panel-plugin % yarn watch
```

2. Build data source pannel plugin under dataviser-grafana-datasource-plugin:
```sh
dataviser-grafana-datasource-plugin % yarn watch
```

2. Run the following shell to setup local grafana and access http://localhost:3000 admin/admin to login Grafana.
```sh
./run_grafana.sh
```

3. Create new pannel and add dataviser-grafana-panel-plugin.

![Screen Shot 2022-06-28 at 5 32 50 PM](https://user-images.githubusercontent.com/87627586/176145901-8adc8c85-2a62-424a-bf11-629a860bf6a5.png)

