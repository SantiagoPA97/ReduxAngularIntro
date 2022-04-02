import { createReducer, on } from "@ngrx/store";
import { incrementar, decrementar, multiplicar, dividir, reset } from './contador.actions';

export const initialState = 10;

export const contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),
    on(multiplicar, (state, { numero }) => state * numero),
    on(dividir,     (state, { numero }) => state / numero),
    on(reset,       () => initialState),
  );

// export function contadorReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case incrementar.type:
//             return state + 1;

//         case decrementar.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }