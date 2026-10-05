import { sampleMath, seeItInAction } from "@/content/site";
import EdSection from "@/components/editorial/EdSection";

/** A white example band between the soft benefits section and navy comparison. */
export default function SeeItInAction() {
  return (
    <EdSection
      id="see-it-in-action"
      tone="white"
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

    </EdSection>
  );
}
