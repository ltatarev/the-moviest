import { CARD_HEIGHT, CARD_WIDTH } from './theme';

/**
 * PNG export of a card node. Renders the unscaled 1080×1350 node (the preview
 * scales a wrapper, never the card itself).
 */

async function waitForAssets(node: HTMLElement) {
  await document.fonts.ready;

  const images = Array.from(node.querySelectorAll('img'));

  await Promise.all(
    images.map((image) =>
      image.complete && image.naturalWidth > 0
        ? image.decode().catch(() => undefined)
        : new Promise<void>((resolve) => {
            image.addEventListener('load', () => resolve(), { once: true });
            image.addEventListener('error', () => resolve(), { once: true });
          }),
    ),
  );
}

export async function renderCardPng(node: HTMLElement): Promise<Blob> {
  await waitForAssets(node);

  const { domToBlob } = await import('modern-screenshot');
  const blob = await domToBlob(node, {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    scale: 1,
    type: 'image/png',
  });

  if (!blob) {
    throw new Error('Export produced no image');
  }

  return blob;
}

export function pngFileName(
  templateId: string,
  slug: string,
  index: number,
): string {
  return `${templateId}-${slug}-${String(index + 1).padStart(2, '0')}.png`;
}

export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export async function zipPngs(
  files: Array<{ name: string; blob: Blob }>,
): Promise<Blob> {
  const { default: JSZip } = await import('jszip');
  const zip = new JSZip();

  for (const file of files) {
    zip.file(file.name, file.blob);
  }

  return zip.generateAsync({ type: 'blob' });
}
