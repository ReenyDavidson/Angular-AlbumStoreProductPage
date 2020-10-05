import { Track } from "./track";

export interface Album {
  name: string;
  releaseDtae: string;
  coverImage: string;
  tracks: Track[];
}
