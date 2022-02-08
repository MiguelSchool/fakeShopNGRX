import {UserInterface} from "../../shared/types/UserInterface";
import {BackendErrorsInterface} from "../../shared/types/BackendErrorsInterface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser: UserInterface | null;
  validationErrors: BackendErrorsInterface | null;
  userToken: string | null
}
