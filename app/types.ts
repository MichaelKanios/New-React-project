// src/services/api.ts

//-- Οριζουμε τον τυπο δεδομενων --
export type Article = {
  id:number;
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string; // μπορείς να το βάλεις και ως Date αν θέλεις

};