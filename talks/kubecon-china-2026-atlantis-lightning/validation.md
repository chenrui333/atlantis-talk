# Final validation

Validated September 7, 2026 after applying the supplied official 2026 template.

| Requirement | Evidence / result |
| --- | --- |
| Five-minute limit | Five slides; 554 spoken words; 4:35 planned; 25s safety margin. Exact 448-word emergency script is included. Actual delivery requires Rui's timed rehearsal. |
| Official template | Imported original master and layouts; template layout 2 on the cover, layout 5 on slides 2–5. Original template is retained, with provenance in sources.md. |
| Editable PPTX | PptxGenJS native text and diagram shapes; imported native template masters. All five notes match narration.json, including transition and timing metadata. |
| PPTX opens | LibreOffice 7.3.7.2 loaded the final PPTX and exported all five slides. PowerPoint automation was denied by macOS, so native PowerPoint rendering was not independently tested. |
| Package integrity | validate.py checks five slides, 16:9 dimensions, expected template layouts, note text, all internal relationship targets and HTTPS-only external hyperlinks. No external image dependencies. |
| PDF | Five pages, 960.009 × 540 points; no blank pages. Liberation Sans regular/bold fonts are subset-embedded. Visible content matches the final rendered previews. |
| Links | pdfinfo -url confirms official homepage and GitHub links on page 5. PPTX hyperlink relationships have the same destinations. |
| QR | Apple Vision independently decoded both assets/qr.png and the full rendered closing slide to the official homepage. The four-module quiet zone is retained. Physical long-distance scanning depends on room/projector conditions. |
| Visual review | All five final PNGs inspected at full resolution. No visible clipping, text overlap, logo distortion or footer collisions. Title uses official skyline; content uses white layouts and dark teal text. |
| Offline delivery | All critical text, diagrams and images are local/embedded. No video, animation, browser or network dependency during the talk. |
| Technical research | Current release rechecked as v0.47.1. Approval requirements are configured; APIs described as alpha; Kubernetes optional; planning trust boundary retained. |
| Scope | Presentation work is in the talk directory; root skills-lock.json and .gitignore record the requested local skill setup. No Atlantis application code or unrelated dependencies changed. |

## Revision evidence

The first template render exposed footer collisions on slides 4 and 5. Content was moved up to reserve the footer, the PR caption was enlarged to 18pt, and the architecture's lower elements were adjusted. A second render was inspected slide by slide and the QR retested.

The first template package export also exposed a renderer compatibility issue with prefixed package-relationship/content-type namespaces. The final importer uses defusedxml.minidom to preserve the original namespace declarations. The render script refuses to reuse an old PDF if export fails. The final deck successfully opened and exported after this correction.

## Remaining human checks

Check the actual laptop/projector connection and rehearse aloud. Resolve the public schedule's language label and confirm the final submission route with the organizers. These do not prevent use of the delivered presentation artifacts.

## Final skill-guided QA pass

All four requested skills were installed, read and applied before this pass. The primary PPTX validator initially found a duplicate layout ID in the leftover generated master and an unreferenced imported theme. The importer now traverses the finalized package relationship graph and removes unreachable parts, while preserving the original namespace declarations. Rebuilt the PPTX and ran the skill validator with `--original assets/conference-template.pptx`: **All validations PASSED!** This includes the stricter package/schema checks; no inherited-error waiver was used to hide either repair.

Rendered the repaired final PPTX through LibreOffice to a new five-page PDF and regenerated all five 1921 × 1080 PNGs. Inspected every image at full resolution for overflow, overlap, contrast, broken assets, tiny text and template deviations:

| Slide | Explicit final visual result |
| --- | --- |
| 1 | Full accepted title fits; white text is clear on original skyline background; event marks and Atlantis icon are crisp and not stretched. No content intersects the skyline. |
| 2 | Nodes and arrows align; arrowheads do not cross labels. Terraform/OpenTofu and Provider APIs fit their boxes. Footer has clear separation. No rasterized process labels. |
| 3 | All four PR rows fit; plan summary and apply command are large. Illustrative/configured-approval caption is 18pt and stays inside the panel. Footer does not collide. |
| 4 | Three equal cards align; benefit labels and two-line descriptions fit. Hosting and current-project lines stay above the footer. Current-project text is 19pt; three benefits retain visual priority. |
| 5 | Closing phrases and both visible URLs fit. QR quiet zone is unobstructed, high contrast and independently decoded. Official footer stays unchanged. |

The small 12pt slide numbers and 16pt section metadata are nonessential; main content meets the larger conference-size typography target. All original conference media retained in the final package match their source bytes. The public-facing design is unchanged by the package repairs. Content QA found no lorem ipsum, TODO or unfilled insert markers. Narration and transitions are verified against both embedded notes and script.md. See rehearsal.md for the final five-perspective critique and timed practice instructions. Actual human delivery remains unmeasured.
