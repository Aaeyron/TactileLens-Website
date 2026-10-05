import Image from "next/image";
import { logo, screenPreview, site } from "@/content/site";

export type ScreenConfig = {
  /** Which app screen goes here, e.g. "App screen: Camera". */
  label: string;
  /** Where to save the image, e.g. "public/screenshots/camera.png". */
  file: string;
  /** Public URL of the image, e.g. "/screenshots/camera.png". Empty = placeholder. */
  src: string;
  width: number;
  height: number;
  /** Short description of what the screen shows (required once src is set). */
  alt: string;
};

type ScreenshotProps = {
  screen: ScreenConfig;
  /** Wrap in the generic phone frame (hero and Home steps). */
  frame?: boolean;
  /** Preload when the image is above the fold (hero). */
  preload?: boolean;
  /** Rendered width hint for next/image. */
  sizes: string;
  /** Show the label and "coming soon" caption under the image (default). */
  caption?: boolean;
};

/**
 * A captioned app screenshot. Missing images get a branded placeholder
 * and an explicit coming-soon caption.
 */
export default function Screenshot({ screen, frame = false, preload = false, sizes, caption = true }: ScreenshotProps) {
  const content = screen.src ? (
    <Image
      className="screenshot-image"
      src={screen.src}
      alt={screen.alt}
      width={screen.width}
      height={screen.height}
      sizes={sizes}
      preload={preload}
    />
  ) : (
    <div className="screenshot-placeholder" aria-hidden="true">
      <Image className="preview-brand-mark" src={logo.src} alt="" width={48} height={48} />
      <p className="screenshot-label">{site.name}</p>
      <p className="screenshot-preview-label">{screenPreview.label}</p>
      <span className="preview-page-lines"><span /><span /><span /></span>
    </div>
  );

  return (
    <figure className={`screen-preview ${frame ? "screen-preview--phone" : ""}`.trim()}>
      <div className="screen-preview-stage">
        {frame ? (
          <div className="phone">
            <div className="phone-screen">{content}</div>
          </div>
        ) : (
          <div className="screenshot">{content}</div>
        )}
      </div>
      {caption && (
        <figcaption className="screen-caption">
          {screen.label.replace(/^App screen: /, "")}
          {!screen.src && <span className="screen-caption-status">{screenPreview.pending}</span>}
        </figcaption>
      )}
    </figure>
  );
}
