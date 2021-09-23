import React from 'react';
import Styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
const Table = () => {
  const tableData = useSelector((state) => state.tableData.tableData);
  const metrics = useSelector((state) => state.tableData.metrics);
  return (
    <div style={{ overflowX: 'auto' }}>
      {tableData && tableData.length > 0 ? (
        <table className={`${Styles.table}`}>
          <thead>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Date</span>
                <span className={`${Styles.count}`}>{metrics.records}</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>App Name</span>
                <span className={`${Styles.count}`}>{metrics.appRecords}</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Ad Request</span>
                <span className={`${Styles.count}`}>{metrics.adRequests}</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Ad Response</span>
                <span className={`${Styles.count}`}>{metrics.adResponses}</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Impressions</span>
                <span className={`${Styles.count}`}>{metrics.impressions}</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Clicks</span>
                <span className={`${Styles.count}`}>{metrics.clicks}</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Revenue</span>
                <span className={`${Styles.count}`}>
                  ${Math.round(metrics.revenue).toLocaleString('en-US')}
                </span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>Fill Rate</span>
                <span className={`${Styles.count}`}>{metrics.fillRate}%</span>
              </span>
            </th>
            <th>
              <span className={`${Styles.heading}`}>
                <span>CTR</span>
                <span className={`${Styles.count}`}>{metrics.ctr}%</span>
              </span>
            </th>
          </thead>
          <tbody>
            {tableData.map((row) => {
              return (
                <tr>
                  <td>
                    <Moment format={'DD MMM YYYY'}>{row.date}</Moment>
                  </td>
                  <td>
                    <img src='images/logo.png' /> {row.appName}
                  </td>
                  <td>{row.requests.toLocaleString('en-US')}</td>
                  <td>{row.responses.toLocaleString('en-US')}</td>
                  <td>{row.impressions.toLocaleString('en-US')}</td>
                  <td>{row.clicks.toLocaleString('en-US')}</td>
                  <td>${row.revenue.toFixed(2)}</td>
                  <td>{row.fillRate}</td>
                  <td>{row.ctr}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        'No Data'
      )}
    </div>
  );
};

export default Table;
