import Icon, { type IconName } from "@/components/ui/Icon";
import RichText from "@/components/ui/RichText";

type Column = {
  title: string;
  points: readonly { icon: IconName; text: string }[];
};

type ComparisonProps = {
  problem: Column;
  solution: Column;
};

/** "The problem → Our solution" in two columns. */
export default function Comparison({ problem, solution }: ComparisonProps) {
  return (
    <div className="comparison">
      {[
        { column: problem, tone: "problem" },
        { column: solution, tone: "solution" },
      ].map(({ column, tone }, index) => (
        <div className={`comparison-column comparison-column--${tone}`} key={column.title}>
          <h3 className="card-title comparison-title">{column.title}</h3>
          <ul className="comparison-points" role="list">
            {column.points.map((point) => (
              <li className="comparison-point" key={point.text}>
                <span className="comparison-icon" aria-hidden="true">
                  <Icon name={point.icon} size={20} />
                </span>
                <span>
                  <RichText text={point.text} />
                </span>
              </li>
            ))}
          </ul>
          {index === 0 && (
            <span className="comparison-arrow" aria-hidden="true">
              <Icon name="arrow-right" size={24} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
