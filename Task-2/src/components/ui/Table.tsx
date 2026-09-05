import "./Table.css";

interface TableProps {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
}

function Table({ columns, data, striped = false }: TableProps) {
  return (
    <div className="table-wrapper">
      <table className={`table ${striped ? "table-striped" : ""}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;