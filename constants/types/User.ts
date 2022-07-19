import { User } from "../../models";
import { SettingsModelBase } from "./Settings";

export const UserModelBase: User = {
    id: '',
    fullname: '',
    email: '',
    username: '',
    settings: SettingsModelBase,
    confirmedEmail: false,
    userSettingsId: ''
}