import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type settingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Settings {
  readonly id: string;
  readonly theme?: boolean | null;
  readonly language?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<settings, settingsMetaData>);
  static copyOf(source: settings, mutator: (draft: MutableModel<settings, settingsMetaData>) => MutableModel<settings, settingsMetaData> | void): settings;
}

export declare class User {
  readonly id: string;
  readonly fullname?: string | null;
  readonly email: string;
  readonly username: string;
  readonly settings?: settings | null;
  readonly confirmedEmail?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersettingsId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}