import { appRelease, downloadCta, site } from "@/content/site";
import Button from "@/components/ui/Button";

type DownloadCtaProps = {
  /** Unique prefix for element ids, needed when used more than once per page. */
  idPrefix: string;
};

/** True for files served from this site (the `download` attribute only works same-origin). */
function isOwnDomain(url: string) {
  if (url.startsWith("/") && !url.startsWith("//")) return true;
  if (!site.url) return false;

  try {
    return new URL(url).origin === new URL(site.url).origin;
  } catch {
    return false;
  }
}

/**
 * The main "Download for Android" call to action.
 * Until appRelease.apkUrl is filled in, it shows a "coming soon" notice
 * instead of a link, so visitors never hit a dead download.
 */
export default function DownloadCta({ idPrefix }: DownloadCtaProps) {
  const { apkUrl, version, fileSize, minAndroidVersion } = appRelease;

  if (!apkUrl) {
    return (
      <div className="download-cta">
        <p className="download-pending">{downloadCta.comingSoonLabel}</p>
        <p className="download-meta">{downloadCta.comingSoonNote}</p>
      </div>
    );
  }

  const metaId = `${idPrefix}-download-meta`;
  const details = [
    version && `Version ${version}`,
    fileSize,
    minAndroidVersion && `Android ${minAndroidVersion}+`,
  ].filter(Boolean) as string[];

  return (
    <div className="download-cta">
      <Button
        href={apkUrl}
        download={isOwnDomain(apkUrl) || undefined}
        aria-describedby={details.length ? metaId : undefined}
      >
        {downloadCta.label}
      </Button>

      {details.length > 0 && (
        <p id={metaId} className="download-meta">
          {details.map((detail, index) => (
            <span key={detail}>
              {index > 0 && (
                <span className="download-meta-separator" aria-hidden="true">
                  ·
                </span>
              )}
              {detail}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
