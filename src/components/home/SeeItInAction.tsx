import { sampleMath, seeItInAction } from "@/content/site";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";

/** Before/after card: printed "x + 1" → Nemeth braille. */
export default function SeeItInAction() {
  return (
    <Section
      id="see-it-in-action"
      eyebrow={seeItInAction.eyebrow}
      title={seeItInAction.title}
      description={seeItInAction.description}
    >
      <figure className="compare">
        <figcaption className="visually-hidden">{seeItInAction.srText}</figcaption>

        <div className="compare-panel" aria-hidden="true">
          <p className="compare-label">{seeItInAction.beforeLabel}</p>
          <p className="compare-printed">{sampleMath.printed}</p>
        </div>

        <span className="compare-arrow" aria-hidden="true">
          <Icon name="arrow-right" size={28} />
        </span>

        <div className="compare-panel compare-panel--output" aria-hidden="true">
          <p className="compare-label">{seeItInAction.afterLabel}</p>
          <p className="braille-text compare-braille">{sampleMath.braille}</p>
        </div>
      </figure>
    </Section>
  );
}
