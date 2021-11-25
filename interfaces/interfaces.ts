export interface IRegisterInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  accessToken: string;
}

export interface IUserFromDB {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  places?: [String];
}

export interface IPlace {
  _id: String;
  name: String;
  latitude: Number;
  longitude: Number;
  averageRating?: Number;
  reviews?: [String];
  placeId: String;
  placeType: String;
  photoReference: String;
  totalUserRating?: Number;
}
