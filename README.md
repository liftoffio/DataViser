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
![Screen Shot 2022-06-28 at 6 03 24 PM](https://user-images.githubusercontent.com/87627586/176152722-a7760fc0-b461-49b4-9663-45f47e87140a.png)


3. Add our data source plugin.
![Screen Shot 2022-06-28 at 5 58 25 PM](https://user-images.githubusercontent.com/87627586/176153121-394db6cd-af99-4095-8882-661ab3a332c0.png)
![Screen Shot 2022-06-28 at 5 58 38 PM](https://user-images.githubusercontent.com/87627586/176153289-a7902fe7-8351-4a9c-9453-fa4e110a5d8d.png)

4. Add your dashboard and panel
![Screen Shot 2022-06-28 at 5 56 52 PM](https://user-images.githubusercontent.com/87627586/176153445-277ec390-09da-40dd-a757-d28cfaa8b2da.png)

5. Select our panel and data source plugin 
![Screen Shot 2022-06-28 at 5 59 04 PM](https://user-images.githubusercontent.com/87627586/176153981-64d95d90-f39c-4ba0-9ffb-b903fbdbeb91.png)
