export interface PhotoApiType {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface FullPhotoApiType {
  id: string;
  secret: string;
  server: string;
  dateuploaded: string;
  license: string;
  safety_level: string;
  views: string;
  media: string;
  isfavorite: number;
  farm: number;
  rotation: number;
  owner: {
    nsid: string;
    username: string;
    realname: string;
    iconserver: string;
    iconfarm: number;
    path_alias: string;
    location: unknown;
    gift: unknown;
  };
  title: unknown;
  description: {
    _content: string;
  };
  visibility: unknown;
  dates: {
    posted: string;
    taken: string;
    takengranularity: number;
    takenunknown: string;
    lastupdate: string;
  };
  editability: unknown;
  publiceditability: unknown;
  usage: unknown;
  comments: unknown;
  notes: unknown;
  people: unknown;
  tags: unknown;
  location: unknown;
  geoperms: unknown;
  urls: unknown;
}

export interface PhotoType extends Omit<PhotoApiType, 'secret' | 'server' | 'farm'> {
  imgSrc: string;
}

export interface PhotosApiType {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: PhotoApiType[];
}

export interface PhotosType {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: PhotoType[];
}
