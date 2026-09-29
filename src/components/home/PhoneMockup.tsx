import Image from "next/image";
import { hero } from "@/content/site";

/**
 * A generic CSS-drawn phone frame. Shows the real screenshot from site.ts
 * once it is filled in, otherwise a placeholder "scan → braille" screen.
 */
export default function PhoneMockup() {
  const { screenshot, placeholder } = hero.mockup;

  return (
    <div className="phone">
      <div className="phone-screen">
        {screenshot.src ? (
          <Image
            className="phone-screenshot"
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            sizes="(min-width: 960px) 272px, 240px"
            preload
          />
        ) : (
          // TODO: Placeholder until real app screenshots are added (see site.ts).
          <div className="mock-screen" role="img" aria-label={placeholder.label}>
            <div className="mock-appbar" aria-hidden="true">
              <span className="mock-appbar-mark">T</span>
              TactileLens
            </div>

            <div className="mock-body" aria-hidden="true">
              <p className="mock-label">{placeholder.scanLabel}</p>
              <div className="mock-viewfinder">
                <span className="mock-printed">{placeholder.printed}</span>
              </div>

              <p className="mock-step">
                <span className="mock-step-arrow">↓</span>
                {placeholder.translateLabel}
              </p>

              <p className="mock-label">{placeholder.brailleLabel}</p>
              <div className="mock-output">
                <span className="mock-braille">{placeholder.braille}</span>
              </div>
            </div>

            <div className="mock-shutter" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
