type DataTableProps = {
  /** Describes the table for screen readers (visually hidden). */
  caption: string;
  columns: readonly [string, string];
  rows: readonly { label: string; value: string }[];
};

/** A simple two-column table with row headers (e.g. system requirements). */
export default function DataTable({ caption, columns, rows }: DataTableProps) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="label">
              {columns[0]}
            </th>
            <th scope="col" className="label">
              {columns[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.value.startsWith("TODO") ? "Details to follow." : row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
