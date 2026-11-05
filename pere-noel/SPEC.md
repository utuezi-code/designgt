GOAL:    Le spectateur (une marque qui cherche un studio motion) se dit « je veux ce niveau de finition pour ma logistique ». Il retient : le Père Noël, c'est une logistique parfaite jusqu'au dernier mètre.
OUTPUT:  HyperFrames, 1920 x 1080, 30 fps
TIME:    46 s x 30 = 1380 frames ; musique 125 BPM = 14.4 frames/beat, mesure 1.92 s (piste démarrée à 0.485 s, son 1er temps)
LOOK:    diorama isométrique vrai (caméra orthographique, élévation 35.26°, azimut 45°), low-poly flat shading.
         Fond : nuit radiale #3A5A8C → #1E3354 ; neige #F4F7FB, ombres bleutées ; terre des îlots #6E4F4A.
         Rouge Père Noël #D7263D, vert sapin #1F6F5C, fenêtres #FFC861 (émissif), or #F2B33D = seul accent texte (un mot par plan).
         Aube (34.2 s) : fond #FFD3B0 → #EE9A86, lumière chaude.
         Display : Outfit 800, 132 px, tracking -2 % ; étiquettes Outfit 600, 30 px, blanc + ombre portée 0 2px 10px rgba(10,20,40,.55).
         Ombres temps réel PCF douces, 2048 px.
OBJECTS: boîte aux lettres rouge à fente + drapeau ; enveloppe blanche + cachet rouge ; maisons à pignon, toit enneigé, cheminée, fenêtres chaudes ;
         sapins (3 cônes + pointes de neige) ; usine du Pôle Nord (murs rouges, toit en sheds, enseigne « PÈRE NOËL & CIE ») ;
         tapis roulants à rouleaux, trieuse, machine à emballer ; lutins (corps vert, bonnet rouge) ; traîneau rouge à patins dorés, hotte, Père Noël, 4 rennes dont Rudolph (nez rouge) ;
         maison de Léa en coupe : cheminée-conduit, âtre et feu, sapin à guirlande, tapis, canapé.
MOTION:  caméra power2.inOut ; arrivées expo.out ; zoom traversant power3.in ; whip 0.8 s avec flou 0→10 px→0 ;
         murs qui se rabattent : power3.inOut 0.8 s ; pops de validation : spring amorti 0.5 ; titres : un mot à la fois, flou 8 px → 0 en 0.16 s.
SHOTS:   0.0–4.8   gros plan boîte aux lettres, la lettre de Léa est postée puis s'envole (étiquette Léa)
         4.8–9.3   recul : des lettres s'envolent de chaque maison vers le nord — « Une nuit. Zéro retard. »
         9.3–13.2  whip vers le Pôle Nord, l'usine et son enseigne — VO révélation
         13.2–17.2 le toit s'envole, les murs se rabattent : tri des lettres — « Lire. Trier. »
         17.2–21.0 la lettre devient colis : carton → papier rouge → ruban → nœud — « Emballer »
         21.0–27.6 colis dans la hotte, décollage, vue carte : l'itinéraire doré se trace, chaque cheminée validée — « Charger », « Optimiser »
         27.6–34.0 plongée sur la maison de Léa, coupe, chute dans le conduit, sortie de l'âtre, sapin allumé — « Le dernier mètre · 1 m »
         34.0–38.4 le traîneau repart, l'aube inonde la scène — « Avant 7 h. Sous le sapin. » ; zoom à travers le cadeau rouge
         38.4–46.0 carte de fin sur le rouge du cadeau : la boîte isométrique tombe, s'ouvre, le nom s'écrit, CTA « Écrire au Pôle Nord · H0H 0H0 »
BANNED:  vide sombre avec petits objets au centre ; glow/bloom/particules décoratives (la neige est la météo du monde, rien d'autre) ;
         cartes en verre, pastilles/pills, labels en capitales mono, logo en coin ; trois cartes alignées ; tout qui fond-et-monte ;
         titres qui dérivent après s'être posés ; interface produit inclinée.
QA:      t=1.5 étiquette Léa lisible ; t=7 lettres multiples lisibles comme enveloppes ; t=11.5 enseigne lisible ; t=15 tri lisible ;
         t=19.8 colis rouge + nœud ; t=25 carte avec itinéraire doré ; t=30 colis visible dans le conduit ; t=36 aube ; t=44 carte de fin.
