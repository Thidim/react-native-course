import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SettingsMetaData = {
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
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

export declare class User {
  readonly id: string;
  readonly fullname?: string | null;
  readonly email: string;
  readonly username: string;
  readonly settings?: Settings | null;
  readonly confirmedEmail?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSettingsId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}