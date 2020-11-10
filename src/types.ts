export interface Music {
  id: string;
  name: string;
  duration: number;
  album_id: string;
  album_name: string;
  artist_id: string;
  artist_name: string;
  license_ccurl: string;
  url: string;
  album_images: string[];
  added_at: string; // Date
}
export interface SearchMusicResponse {
  musics: Array<Music> | null;
}
export type SearchMusicVariables = {
  q: string;
};

export interface GetAlbumResponse {
  musics: Music[];
  album: Album;
}
export type GetAlbumVariables = string;

export interface CreateClientResponse {
  token: string;
}

export type createClientVariables = {
  email: string;
};
export interface GetArtistResponse {
  musics: Music[];
  albums: Album[];
  artist: Artist;
}
export type GetArtistVariables = string;
export interface Album {
  id: string;
  name: string;
  artist_id: string;
  images: string[];
  added_at: string; // Date
}

export interface Artist {
  id: string;
  name: string;
}
