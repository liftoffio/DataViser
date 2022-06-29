import defaults from 'lodash/defaults';

import React, { ChangeEvent, PureComponent } from 'react';
import { InlineField, Button, DatePickerWithInput } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './datasource';
import { defaultQuery, MyDataSourceOptions, MyQuery } from './types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;
export class QueryEditor extends PureComponent<Props> {
  onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, queryText: event.target.value });
  };

  onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, constant: parseFloat(event.target.value) });
  };

  onQueryClick = () => {
    const { onRunQuery } = this.props;
    // executes the query
    onRunQuery();
  };

  onDateFromChange = (value: Date | string) => {
    const { onChange, query } = this.props;
    onChange({ ...query, dateFrom: value });
  }

  onDateToChange = (value: Date | string) => {
    const { onChange, query } = this.props;
    onChange({ ...query, dateTo: value });
  }

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { dateFrom, dateTo } = query;

    return (
      <div className="gf-form">
        <InlineField label="From Date:"><DatePickerWithInput closeOnSelect={true} value={dateFrom} onChange={this.onDateFromChange}/></InlineField>
        <InlineField label="To Date:"><DatePickerWithInput closeOnSelect={true} value={dateTo} onChange={this.onDateToChange}/></InlineField>
        <InlineField>
          <Button
           onClick={this.onQueryClick}
          >
            Run Query
          </Button>
        </InlineField>
      </div>
    );
  }
}
