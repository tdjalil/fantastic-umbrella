const subjectsData = {
  6e: {
    maths: {
      quiz: [
        {question:"5 + 7 = ?", choices:["11","12","13"], answer:"12", image:"images/maths1.png"},
        {question:"8 × 3 = ?", choices:["24","23","21"], answer:"24", image:"images/maths2.png"}
      ],
      exercises:[
        {title:"Exercice Maths 6e #1", content:"Résous 5+7", image:"images/maths1.png"},
        {title:"Exercice Maths 6e #2", content:"Résous 8×3", image:"images/maths2.png"}
      ],
      videos:[
        {title:"Vidéo Maths Addition", src:"videos/video1.mp4"}
      ],
      bonus:[
        {title:"Mini Défi Maths", content:"Résous rapidement : 12 × 3"}
      ]
    },
    francais: {
      quiz:[
        {question:"Synonyme de 'rapide' ?", choices:["vite","lent","gros"], answer:"vite", image:"images/fr1.png"}
      ],
      exercises:[
        {title:"Exercice Français", content:"Trouve le synonyme de 'rapide'", image:"images/fr1.png"}
      ],
      videos:[
        {title:"Vidéo Français 6e", src:"videos/video2.mp4"}
      ],
      bonus:[{title:"Défi Français", content:"Complète la phrase : Le chat ..."}]
    }
    // Ajouter Histoire, Géographie, Sciences...
  },
  // Ajouter 3e, Seconde, Terminale avec contenu réaliste...
};
