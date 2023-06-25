import React, { useState } from "react";
import "./performance-table.css";

export interface TableProps {
  headings: string[];
  data: any[];
}

const PerformanceTable: React.FC<TableProps> = ({ headings, data }) => {
  return (
    <div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map(
                  (
                    cell:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined,
                    cellIndex: React.Key | null | undefined
                  ) => (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
