import React from "react";
import Styles from "./Table.module.scss";
import { useSelector } from "react-redux";
import Moment from "react-moment";
const Table = () => {
  const tableData = useSelector((state) => state.tableData.tableData);
  const metrics = useSelector((state) => state.tableData.metrics);
  const visibleFields = useSelector((state) => state.tableData.visibleFields);
  return (
    <div style={{ overflowX: "auto" }}>
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
            {visibleFields["Clicks"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>Clicks</span>
                  <span className={`${Styles.count}`}>{metrics.clicks}</span>
                </span>
              </th>
            )}
            {visibleFields["Ad Requests"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>Ad Request</span>
                  <span className={`${Styles.count}`}>
                    {metrics.adRequests}
                  </span>
                </span>
              </th>
            )}
            {visibleFields["Ad Response"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>Ad Response</span>
                  <span className={`${Styles.count}`}>
                    {metrics.adResponses}
                  </span>
                </span>
              </th>
            )}
            {visibleFields["Impression"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>Impressions</span>
                  <span className={`${Styles.count}`}>
                    {metrics.impressions}
                  </span>
                </span>
              </th>
            )}

            {visibleFields["Revenue"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>Revenue</span>
                  <span className={`${Styles.count}`}>
                    ${Math.round(metrics.revenue).toLocaleString("en-US")}
                  </span>
                </span>
              </th>
            )}
            {visibleFields["Fill Rate"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>Fill Rate</span>
                  <span className={`${Styles.count}`}>{metrics.fillRate}%</span>
                </span>
              </th>
            )}
            {visibleFields["CTR"] && (
              <th>
                <span className={`${Styles.heading}`}>
                  <span>CTR</span>
                  <span className={`${Styles.count}`}>{metrics.ctr}%</span>
                </span>
              </th>
            )}
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Moment format={"DD MMM YYYY"}>{row.date}</Moment>
                  </td>
                  <td>
                    <img src="images/logo.png" alt="" /> {row.appName}
                  </td>
                  {visibleFields["Clicks"] && (
                    <td>{row.clicks.toLocaleString("en-US")}</td>
                  )}
                  {visibleFields["Ad Requests"] && (
                    <td>{row.requests.toLocaleString("en-US")}</td>
                  )}
                  {visibleFields["Ad Response"] && (
                    <td>{row.responses.toLocaleString("en-US")}</td>
                  )}
                  {visibleFields["Impression"] && (
                    <td>{row.impressions.toLocaleString("en-US")}</td>
                  )}

                  {visibleFields["Revenue"] && (
                    <td>${row && row.revenue.toFixed(2)}</td>
                  )}
                  {visibleFields["Fill Rate"] && <td>{row.fillRate}</td>}
                  {visibleFields["CTR"] && <td>{row.ctr}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "No Data"
      )}
    </div>
  );
};

export default Table;
