'use client';

import { useEffect, useState } from 'react';

export function useTransparentImage(src: string, tolerance = 65) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const img = new Image();
    // Do not set crossOrigin for local files to prevent potential dev server CORS header blocks
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      const width = img.width;
      const height = img.height;

      // 1. Sample the four corners to find the background color
      const getPixel = (x: number, y: number) => {
        const idx = (y * width + x) * 4;
        return {
          r: data[idx],
          g: data[idx + 1],
          b: data[idx + 2],
        };
      };

      const corners = [
        getPixel(0, 0),
        getPixel(width - 1, 0),
        getPixel(0, height - 1),
        getPixel(width - 1, height - 1),
      ];

      // Average background color
      const bgR = Math.round(corners.reduce((sum, c) => sum + c.r, 0) / 4);
      const bgG = Math.round(corners.reduce((sum, c) => sum + c.g, 0) / 4);
      const bgB = Math.round(corners.reduce((sum, c) => sum + c.b, 0) / 4);

      const fadeZone = Math.min(width, height) * 0.20; // 20% edge fade-out boundary

      // 2. Process all pixels
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        let a = data[i + 3];

        // Calculate Euclidean distance to the detected background color
        const dist = Math.sqrt(
          Math.pow(r - bgR, 2) +
          Math.pow(g - bgG, 2) +
          Math.pow(b - bgB, 2)
        );

        // Key out the background color smoothly
        if (dist < tolerance) {
          const alphaRatio = dist / tolerance;
          a = Math.round(alphaRatio * a);
        }

        // Apply edge-proximity fading (vignette)
        const pixelIndex = i / 4;
        const px = pixelIndex % width;
        const py = Math.floor(pixelIndex / width);

        const distToEdgeX = Math.min(px, width - px);
        const distToEdgeY = Math.min(py, height - py);
        const minDistToEdge = Math.min(distToEdgeX, distToEdgeY);

        if (minDistToEdge < fadeZone) {
          const edgeAlpha = minDistToEdge / fadeZone;
          a = Math.round(a * edgeAlpha);
        }

        data[i + 3] = a;
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
    img.src = src;
  }, [src, tolerance]);

  return processedSrc;
}
