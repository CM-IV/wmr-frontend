interface Books {
  id: number;
  title: string;
  author: string;
  publisher: string;
  image: string;
  assigned_to: number;
  description: string;
  publish_year: number;
}

interface Previews {
  id: number;
  title: string;
  url: string;
  image: string;
  assigned_to: number;
}
