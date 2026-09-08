#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
# Arrange existing previews only: no font or presentation dependency is added.
contact_tmp=$(mktemp -d)
trap 'rm -rf "$contact_tmp"' EXIT
for row in {0..4}; do
  first=$(printf '%02d' "$((row * 2 + 1))")
  second=$(printf '%02d' "$((row * 2 + 2))")
  magick "slides-preview/$first.png" "slides-preview/$second.png" \
    -thumbnail 640x360 -bordercolor '#EAF1F3' -border 16 +append "$contact_tmp/$row.png"
done
magick "$contact_tmp/"*.png -append contact-sheet.png
