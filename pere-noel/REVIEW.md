# REVIEW — « Père Noël & Cie » (46 s, 1920×1080, 30 fps)

## Choix créatifs
- Storyline retenue : **A. La lettre de Léa** (`STORYLINES.md`) — un seul plan-séquence isométrique qui suit une lettre réelle jusqu'à devenir le cadeau sous le sapin. Non construites : B (centre de contrôle en split-screen) et C (avant/après face à un livreur classique).
- Vraie 3D isométrique (Three.js, caméra orthographique 35,26° / 45°) plutôt que de l'iso dessiné en 2D : ombres réelles, coupes, murs qui se rabattent, toit fantôme en rayons X.
- Transitions : whip pan vers le Pôle Nord, toit qui s'envole + murs qui se rabattent, panoramique le long du tapis, recul en vue carte, plongée sur la maison, lever du jour (colour flood), zoom à travers le cadeau rouge jusqu'à la carte de fin.
- Données : Léa, 7 ans, « un vélo rouge », 12 rue des Lilas (exemple fictif). H0H 0H0 est le vrai code postal du Père Noël (Postes Canada).

## Mesuré / regardé
- `hyperframes check` : 0 erreur. Contraste WCAG AA OK.
- Planches de snapshots regardées aux moments clés (0,2 → 45,5 s), transition monde → carte de fin vérifiée image par image.
- Son : placé d'après les pics mesurés (`hyperframes audio`), **mesuré, pas écouté**. La voix est une synthèse locale (Kokoro, voix FR « Siwis ») : sa prononciation n'a pas été vérifiée à l'oreille.

## Plan le plus faible
- 21,9–23,2 s (décollage → vue carte) : le traîneau reste petit pendant le recul ; avec plus de temps, caméra accrochée au traîneau pendant le décollage.
- La voix off locale est la limite qualité principale : une voix Gemini TTS ou HeyGen la remplacerait sans toucher au montage (fichiers `assets/voice/vo1…vo9.wav`).

## Avertissements gardés
- `composition_file_too_large` sur `compositions/world.html` : tout le monde 3D vit dans un seul plan-séquence, ce qui est voulu.
- Messages WebGL « GPU stall due to ReadPixels » : propres à la capture headless, sans effet sur l'image.
