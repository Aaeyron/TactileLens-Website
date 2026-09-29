"use client";

import { QRCodeSVG } from "qrcode.react";
import { useSyncExternalStore } from "react";

type DownloadQrProps = {
  /** Page path to encode, e.g. "/download". */
  path: string;
  /** site.url; when empty, the address the page is viewed from is used. */
  siteUrl: string;
  title: string;
  text: string;
};

const subscribe = () => () => {};
const getOrigin = () => window.location.origin;
const getServerOrigin = () => "";

/** QR code linking to the download page, for phones at the capstone defense. */
export default function DownloadQr({ path, siteUrl, title, text }: DownloadQrProps) {
  // Read the current origin without a hydration mismatch (empty on the server).
  const origin = useSyncExternalStore(subscribe, getOrigin, getServerOrigin);
  const base = siteUrl || origin;
  const url = base ? new URL(path, base).toString() : "";

  return (
    <figure className="qr">
      <div className="qr-code" aria-hidden="true">
        {url ? (
          <QRCodeSVG value={url} size={168} level="M" marginSize={2} fgColor="currentColor" bgColor="transparent" />
        ) : (
          <span className="qr-placeholder" />
        )}
      </div>
      <figcaption>
        <p className="qr-title">{title}</p>
        <p className="qr-text">{text}</p>
        {url && <p className="qr-url">{url.replace(/^https?:\/\//, "")}</p>}
      </figcaption>
    </figure>
  );
}
