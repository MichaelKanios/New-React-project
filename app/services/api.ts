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

/* Αυτό διαβάζει από .env μια μεταβλητή VITE_API_URL.
Αν υπάρχει, την χρησιμοποιεί.
Αν δεν υπάρχει, βάζει default http://localhost:3000/data
Έτσι αν αύριο ανεβάσεις το project online, αλλάζεις μόνο το .env, όχι τον κώδικα.

const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000/data";*/
const API_URL = "http://localhost:3000/data";


/* Αυτό είναι ένα utility που:
Ελέγχει αν η απάντηση είναι ok (status 200–299).
Αν δεν είναι → πετάει error.
Αν είναι → κάνει res.json() και επιστρέφει τα δεδομένα με type safety (<T>).
👉 Το <T> είναι generic → σημαίνει ότι μπορείς να του πεις: “περίμενε λίστα Article[] ή ένα Article”.*/

async function handleRes<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

/*Εδώ λες: φέρε μου όλα τα άρθρα.
Επιστρέφει Promise<Article[]> → δηλαδή array από άρθρα.*/

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(API_URL);
  const json = await handleRes<{ data: Article[] }>(res);
  return json.data; // επιστρέφουμε μόνο το array των articles
}


/*Εδώ φέρνεις μόνο τα άρθρα μιας κατηγορίας (π.χ. "sports").
Δεν χρειάζεται να φτιάξεις ένα function για κάθε κατηγορία → το category είναι dynamic argument.
👉 π.χ. getArticlesByCategory("sports") ή getArticlesByCategory("politics").

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const res = await fetch(`${BASE}/articles?category=${encodeURIComponent(category)}`);
  return handleRes<Article[]>(res);
}

/* Εδώ φέρνεις ένα άρθρο συγκεκριμένο (π.χ. το /articles/5).

Χρήσιμο αν έχεις σελίδα "single article".

export async function getArticle(id: number): Promise<Article> {
  const res = await fetch(`${BASE}/articles/${id}`);
  return handleRes<Article>(res);
}
*/