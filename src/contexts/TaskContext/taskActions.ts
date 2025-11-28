// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
//state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, const, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

export enum TaskActionTypes {
    START_TASK = "START_TASK",
    INTERRUPT_TASK = "INTERRUPT_TASK",
    RESET_TASK = "RESET_TASK",
    COUNT_DOWN = "COUNT_DOWN",
    COMPLETE_TASK = "COMPLETE_TASK",
    CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

export type TaskActionsWithPayload =
    | {
          type: TaskActionTypes.START_TASK;
          payload: TaskModel;
      }
    | {
          type: TaskActionTypes.COUNT_DOWN;
          //   payload: Pick<TaskStateModel, "secondsRemaining">; // Forma de pegar a chave
          payload: { secondsRemaining: number }; // Outra forma de pegar a chave, quando se precisa de apenas uma chave
      }
    | {
          type: TaskActionTypes.CHANGE_SETTINGS;
          payload: TaskStateModel["config"];
      };

export type TaskActionWithoutPayload =
    | {
          type: TaskActionTypes.RESET_TASK;
      }
    | {
          type: TaskActionTypes.INTERRUPT_TASK;
      }
    | {
          type: TaskActionTypes.COMPLETE_TASK;
      };

export type TaskActionModel = TaskActionsWithPayload | TaskActionWithoutPayload;
