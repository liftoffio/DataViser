import defaults from 'lodash/defaults';
import demoData from './data/delivery_data.json'

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from '@grafana/data';

import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    // Return a constant for each query.
    const data = options.targets.map(target => {
      const query = defaults(target, defaultQuery);
      let filteredData = demoData.filter( (data) => {
        return new Date(data.timestamp) >= query.dateFrom && new Date(data.timestamp) <= query.dateTo
      })
      let times: number[] = new Array(0)

      filteredData.forEach( (data) => {
        times.push(new Date(data.timestamp).getTime())
      })
      return new MutableDataFrame({
        refId: query.refId,
        fields: [
          { name: 'Time', values: times, type: FieldType.time },
          { name: 'Value', values: filteredData, type: FieldType.other },
        ],
      });
    });

    return { data };
  }

  async testDatasource() {
    // Implement a health check for your data source.
    return {
      status: 'success',
      message: 'Success',
    };
  }
}
