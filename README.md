# Rigsight — Plant Intelligence

Interactive 3D digital twins of the oil and gas value chain, with an engineering hierarchy,
live telemetry, predictive-maintenance signals and a scripted copilot on every component.
No build step, no server needed. Live at https://pankaj29.github.io/rigsight/

## Run
Double-click `index.html` (Chrome, Edge or Firefox), or serve it:

    python -m http.server 8000
    # then open http://localhost:8000

Over http the app fetches `data/<site>/*.csv`; from `file://` it falls back to `data/bundle.js`.

## What is in it
| Site | Stage | Systems · components |
|---|---|---|
| Value chain map | overview | 3 stages · 11 stations (4 live sites, 7 roadmap) |
| Drilling Rig | upstream | 7 · 175 |
| Production Facility | upstream | 7 · 65 |
| Gas Processing Plant | midstream | 8 · 50 |
| LNG Terminal | midstream | 7 · 42 |
| Refinery | downstream | 7 · 58 |

All engineering content is textbook-level and carries the **Proposed** status until reviewed.

## Files
- `index.html` — shell, styles, engine (scene, camera, picking, navigator, inspector, labels, telemetry dock, copilot, landing, routing)
- `sites/*.js` — one file per site: engineering hierarchy + `build()` geometry. Each pushes onto `window.SITES`
- `data/<site>/telemetry.csv` — one row per node tag: `node,tag,pitag,label,unit,lo,hi,warn,v0..v59` (1-min samples ending now; `pitag` is the PI-style point name, e.g. `RIG.HS-DW.HOOK_LOAD.PV`)
- `data/<site>/health.csv` — `node,score,trend,rul_component,rul_days,rul_p10,rul_p90`
- `data/<site>/anomalies.csv` — `ts,node,severity,title,detail,status`
- `data/<site>/maintenance.csv` — `node,kind,ref,title,due,status`
- `data/bundle.js` — the CSVs inlined for `file://` (generated)
- `tools/dump_nodes.js`, `tools/gen_data.py` — regenerate all demo data: `node tools/dump_nodes.js && python tools/gen_data.py`
- `vendor/three.min.js` (r128), `vendor/post/*` (SSAO, bloom passes), `vendor/lottie.min.js`
- `assets/icons/*.svg`, `assets/lottie/rig.json` — IconScout assets under subscription licence

## Adding a site
1. Copy `sites/production.js`, change `id`, `name`, `stage`, `world` (`desert | flat | coast`), `home` camera and `systems`.
2. Draw geometry in `build(h)` with `h.box/cyl/strut/pipe/sph/tower` and the `h.KIT` equipment library
   (`vesselH`, `column`, `exchanger`, `pumpSet`, `finFan`, `valve`, `rack`, `heater`, `tankAPI`, `sphereTank`, `flare`, `compressor`, `building`, `stairTower`).
   Register every mesh to a node id; the Integrity modal reports nodes without 3D.
3. Add a `<script src="sites/<id>.js">` tag in `index.html` and a station on the chain map (`sites/chain.js`) with `site:'<id>'`.
4. Regenerate data (above).

## Telemetry
Every site shows a telemetry dock (T): a site rollup when nothing is selected (health by system, needs-attention list),
and per-component KPIs, 60-min trend with forecast, health score, RUL and anomalies when a component is selected.
The inspector Overview lists the component's live PI tags with sparklines; the landing page and chain map carry per-site health.
The copilot answers scripted questions from the same CSV data (root cause, actions, peers, site rollup, what is due).

## Routes
`#/` landing · `#/chain` value-chain map · `#/<site>` · `#/<site>/<node-id>` deep link to a component.

## Shortcuts
F focus, I isolate, D fade others, H hide, U unhide all, X internals, G subsurface, L labels,
T telemetry dock, R reset, Esc step out, [ navigator, ] inspector, Tab full screen, / search.
