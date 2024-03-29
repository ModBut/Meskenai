import {ACTION} from './action'

export default function OperationButton({ dispatch, operation }) {
    return (
      <button
        onClick={() =>
          dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation } })
        }
      >
        {operation}
      </button>
    )
  }