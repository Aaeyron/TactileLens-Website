import { sampleMath, seeItInAction } from "@/content/site";
import EdSection from "@/components/editorial/EdSection";
import Callout from "@/components/ui/Callout";

/** Soft blue-gray block: printed "x + 1" → Nemeth braille, shown large, with a fact. */
export default function SeeItInAction() {
  return (
    <EdSection
      id="see-it-in-action"
      tone="soft"
      layout="side"
      eyebrow={seeItInAction.eyebrow}
      title={seeItInAction.title}
      description={seeItInAction.description}
    >
      <figure className="compare compare--large">
        <figcaption className="visually-hidden">{seeItInAction.srText}</figcaption>

        <div className="compare-panel" aria-hidden="true">
          <p className="compare-label">{seeItInAction.beforeLabel}</p>
          <p className="compare-printed">{sampleMath.printed}</p>
        </div>

        <div className="compare-panel" aria-hidden="true">
          <p className="compare-label">{seeItInAction.afterLabel}</p>
          <p className="braille-text compare-braille">{sampleMath.braille}</p>
        </div>
      </figure>

      <div className="section-callout">
        <Callout variant="fact" text={seeItInAction.fact} />
      </div>
    </EdSection>
  );
}
