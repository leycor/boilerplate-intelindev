import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CatError, TitleError } from './styles'
const MultipleNotify = ({ errors }: { errors: string[] }) => (
  <div>
    {errors.map((error, index) => (
      <TitleError key={index}>
        <CatError>#</CatError> {error}.
      </TitleError>
    ))}
  </div>
)

const errorNotify = (msg: string) => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 3000,
    toastId: 'error',
  })
}

const successNotify = (msg: string) => {
  console.log('que pasa pa')
  toast.success(msg, {
    position: 'top-center',
    autoClose: 3000,
    toastId: 'success',
  })
}

const customNotifyError = (errors: string[]) => {
  toast.error(<MultipleNotify errors={errors} />, {
    autoClose: 3000,
    toastId: 'error',
  })
}

const promiseNotify = async (
  promiseFunction: Promise<void>,
  deactivateElement?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  deactivateElement && deactivateElement(true)
  await toast
    .promise(promiseFunction, {
      pending: 'Loading',
    })
    .finally(() => {
      deactivateElement && deactivateElement(false)
    })
}

export const NOTIFY = {
  ERROR: errorNotify,
  SUCCESS: successNotify,
  CUSTOM: customNotifyError,
  PROMISE: promiseNotify,
}
