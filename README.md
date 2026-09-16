# Drilling Rig Explorer

Self-contained 3D rig explorer (three.js r128). No build step, no server needed.

## Run
Double-click `index.html`. It works directly from disk in Chrome, Edge or Firefox.

If you prefer a local server (avoids any file:// quirks):

    python -m http.server 8000
    # then open http://localhost:8000

## Files
- index.html      the whole app: styles, hierarchy data, 3D scene, UI
- vendor/three.min.js  three.js r128 (bundled so it runs offline)

Fonts (Inter, JetBrains Mono) load from Google Fonts when online and fall back
to system fonts when offline.

## Editing the content
Open index.html and find `const SYSTEMS = [` near the top of the script.
Each system has `children` assemblies and components. Fields per node:
id, name, summary, body, eng, where, why, specs, safety, conns.
Anything missing on a node is inherited from its parent or system.

To bind 3D geometry to a node, give a mesh that node's id in `buildRig()`
(the `reg(mesh, nodeId)` call). The Integrity panel reports nodes with no 3D.

## Shortcuts
F focus, I isolate, D fade others, H hide, U unhide all, X internals,
G subsurface, R reset, Esc step out, [ navigator, ] inspector, Tab full screen,
/ search.
