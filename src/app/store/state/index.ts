import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../../core/models/app-state.model";
import { cryptoReducer } from "../reducers/crypto.reducer";

export const reducers: ActionReducerMap<AppState> = {
  crypto: cryptoReducer
}
