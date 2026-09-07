#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ -f slides.pdf ]]; then mv slides.pdf /tmp/atlantis-previous-render.pdf; fi
if [[ -n "${ATLANTIS_RENDER_CONTAINER:-}" ]]; then
  # Container must have LibreOffice and the repository mounted at /talk.
  docker exec "$ATLANTIS_RENDER_CONTAINER" libreoffice -env:UserInstallation=file:///tmp/atlantis-lo-profile --headless --convert-to pdf --outdir /talk/talks/kubecon-china-2026-atlantis-lightning /talk/talks/kubecon-china-2026-atlantis-lightning/slides.pptx
elif command -v libreoffice >/dev/null; then
  libreoffice --headless --convert-to pdf --outdir . slides.pptx
else
  osascript render.applescript "$PWD/slides.pptx" "$PWD/slides.pdf"
fi
test -s slides.pdf || { echo "PDF export failed" >&2; exit 1; }
mkdir -p slides-preview
pdftoppm -png -r 144 slides.pdf slides-preview/slide >/dev/null 2>&1
count=$(python3 -c 'import json; print(len(json.load(open("narration.json"))))')
for ((i=1; i<=count; i++)); do printf -v dest '%02d' "$i"; mv "slides-preview/slide-$dest.png" "slides-preview/$dest.png"; done
pdfinfo slides.pdf | head -18
