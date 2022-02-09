import {CategoryInterface} from "./CategoryInterface";
import {BackendErrorsInterface} from "../../../shared/types/BackendErrorsInterface";

export interface CategoryStateInterface {
  data: CategoryInterface[] | null,
  isLoading: boolean,
  error: BackendErrorsInterface  | null
}
