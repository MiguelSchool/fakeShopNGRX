import {AuthStateInterface} from "../../auth/types/AuthStateInterface";
import {CategoryStateInterface} from "../../home/shared/types/CategoryStateInterface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  category: CategoryStateInterface;
}
