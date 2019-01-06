
export const BASELINE_1 =  'Votre supermarché génère autant de casse que de résultat net'
export const BASELINE_2 =  'Valorisez 80 % de vos invendus'
export const BASELINE_3 =  'Atteignez zéro biodéchet dans votre point de vente'



/* =========================== */
/* ROTATION */ 
/* =========================== */
/* STICK */  //  Title + texte + texte
export const STICK_text_head_image_1 = [
'Zéro-Gâchis est pionnier de la gestion des dates courtes',
'professionnalise les process de revalorisation',
'57 % (1) de récupération de valeur sur le prix de vente'
]
export const STICK_text_head_image_2 = [
    'Un concept de vente apprécié par les clients',
    '90 % de taux de revente',
    'améliore l’image du magasin'
]

export const STICK_text_head_image_3 = [
    'Baissez votre casse, Améliorez votre revalorisation',
]

export const S3_STATIC_DIR = 'https://s3-eu-west-1.amazonaws.com/static-sales-web/'
export const S3_STATIC_IMG_DIR = S3_STATIC_DIR + 'img/'
export const S3_STATIC_VIDEO_DIR = S3_STATIC_DIR + 'video/'

export const MISSION_IMG = S3_STATIC_IMG_DIR + 'mission-schema.png'

export const STICK_ARRAY_SLIDER = [
    {src : S3_STATIC_IMG_DIR + 'labeling-slide-1.jpg', array_text : STICK_text_head_image_1},
    {src : S3_STATIC_IMG_DIR + 'labeling-slide-2.jpg', array_text : STICK_text_head_image_2},
    {src : S3_STATIC_IMG_DIR + 'labeling-slide-3.jpg', array_text : STICK_text_head_image_3}
]


export const CONTACT_ARRAY_PARTNER_IMG = [
    'https://static-zerogachis.s3.amazonaws.com/main/img/clientslogo/leclerc_picto.png',
    'https://static-zerogachis.s3.amazonaws.com/main/img/clientslogo/carrefour_picto.png',
    'https://static-zerogachis.s3.amazonaws.com/main/img/clientslogo/mousquetaires_picto.png',
    'https://static-zerogachis.s3.amazonaws.com/main/img/clientslogo/u_picto.png',
    'https://static-zerogachis.s3.amazonaws.com/main/img/clientslogo/auchan_picto.png',
    'https://static-zerogachis.s3.amazonaws.com/main/img/clientslogo/cora_picto.png',
]

// Ttire / texte 
export const EASYTURN_text_left = [
    '1 produit détecté = 1 produit revalorisé',
    '100% de chance d’être détecté à temps grâce aux alertes quotidiennes'
]
export const EASYTURN_text_centerleft = [
    '75% de temps gagné sur le contrôle-date',
    'Grâce à une spatialisation par rayon'
]
export const EASYTURN_text_centerright = [
    'Objectif 0 périmé dans les rayons surveillés',
    'Un retrait paramétré selon la charte fraîcheur' 
]
export const EASYTURN_text_right = [
    'Image fraîcheur améliorée de votre point de vente',
    'Une tenue de rayon rapide et maîtrisée'
]

/* =========================== */
/* DON */ 

export const DON_text_head = [
    '',
    'Mettre en place et coordonner les dons alimentaires en magasin'
]
export const DON_text_left = [
    '',
    '60% de récupération de valeur sur le prix d’achat'
]
export const DON_text_center = [
    '',
    '40 % de réduction moyenne de la facture déchets'
]
export const DON_text_right = [
    '',
    '“zéro biodéchet” : objectif déjà atteint pour plusieurs supermarchés'
]

/* =========================== */
/* WHYZG */ 

export const WHYZG_image_left = S3_STATIC_IMG_DIR+ 'specialiste_metier.svg'
export const WHYZG_text_left = [
    'Spécialiste métier',
    '300 partenaires en grande distribution'
]
export const WHYZG_image_centerleft = S3_STATIC_IMG_DIR + 'commsission_succes.svg'
export const WHYZG_text_centerleft = [
    'Commission au succès',
    'Zéro-Gâchis se rémunère  uniquement sur les gains que nous générons'
]


export const WHYZG_image_center = S3_STATIC_IMG_DIR + 'accompagnementerrain.svg'
export const WHYZG_text_center = [
    'Accompagnement terrain',
    'Des visites mensuelles pour pérenniser les performances' 
]
export const WHYZG_image_centerright = S3_STATIC_IMG_DIR + 'expertise-statistiques.svg'
export const WHYZG_text_centerright = [
    'Expertise statistique',
    'Des indicateurs personnalisés pour choisir les meilleurs leviers'
]
export const WHYZG_image_right = S3_STATIC_IMG_DIR + 'marque-reconnue.svg'
export const WHYZG_text_right = [
    'Une marque reconnue',
    'Communication  de l’engagement du magasin contre le gaspillage alimentaire'
]