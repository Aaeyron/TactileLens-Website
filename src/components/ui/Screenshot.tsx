import Image from "next/image";

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
};

/**
 * An app screenshot spot. Until `src` is filled in (see `screens` in
 * site.ts), it shows an empty dashed box labeled with the screen it is for
 * and the file path to use. The placeholder is hidden from screen readers.
 */
export default function Screenshot({ screen, frame = false, preload = false, sizes }: ScreenshotProps) {
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
      <p className="screenshot-label">{screen.label}</p>
      <p className="screenshot-file">→ {screen.file}</p>
    </div>
  );

  if (!frame) return <div className="screenshot">{content}</div>;

  return (
    <div className="phone">
      <div className="phone-screen">{content}</div>
    </div>
  );
}
