#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
# Polish v2; its original bytes are preserved in slides-reference-10.pdf.
render_tmp=$(mktemp -d "$PWD/.render-XXXXXX")
trap 'rm -rf "$render_tmp"' EXIT
if [[ -n "${ATLANTIS_RENDER_CONTAINER:-}" ]]; then
  docker exec "$ATLANTIS_RENDER_CONTAINER" libreoffice -env:UserInstallation=file:///tmp/atlantis-lo-profile --headless --convert-to pdf --outdir "/talk/talks/kubecon-china-2026-atlantis-lightning/$(basename "$render_tmp")" /talk/talks/kubecon-china-2026-atlantis-lightning/slides.pptx
elif command -v libreoffice >/dev/null; then
  libreoffice --headless --convert-to pdf --outdir "$render_tmp" slides.pptx
else
  osascript render.applescript "$PWD/slides.pptx" "$render_tmp/slides.pdf"
fi
test -s "$render_tmp/slides.pdf"
mv "$render_tmp/slides.pdf" slidesv2.pdf
mkdir -p slides-preview
pdftoppm -png -r 144 slidesv2.pdf "$render_tmp/slide" >/dev/null 2>&1
count=$(python3 -c 'import json; print(len(json.load(open("narration.json"))))')
for ((i=1; i<=count; i++)); do
  printf -v dest '%02d' "$i"
  printf -v src "%0${#count}d" "$i"
  mv "$render_tmp/slide-$src.png" "slides-preview/$dest.png"
done
# Remove only obsolete generated previews, after a successful new export.
for ((i=count+1; i<=10; i++)); do printf -v old '%02d' "$i"; rm -f "slides-preview/$old.png"; done
pdfinfo slidesv2.pdf | head -18
