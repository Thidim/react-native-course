import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { RootStackParamList } from "./types";

export interface App {
    title: string;
    location: keyof RootStackParamList;
    icon: IconDefinition;
    color: string;
    owned: boolean;
}