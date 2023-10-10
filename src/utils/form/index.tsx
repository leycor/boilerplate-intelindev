'use client'
import InputForm from './inputs'
import { type IFormInput } from './types'
import { FormValidations } from './validations/FormValidations'

const CustomForm = (customForm: IFormInput[]) => {
  const isValidate = () => {
    return FormValidations(customForm)
  }

  const getFormMap = (exclude?: string[]) => {
    return (
      <>
        {customForm.map(
          field =>
            !exclude?.includes(field.name) && (
              <InputForm
                key={field.name}
                type={field.type}
                isRequired={field.isRequired}
                label={field.label}
                name={field.name}
                value={field.value}
                placeholder={field.placeholder}
                validations={field.validations}
                selectOption={field.selectOption}
                description={field.description}
                showError={field.showError}
                disabled={field.disabled}
                statusCheck={field.statusCheck}
                onChange={field.onChange}
              />
            ),
        )}
      </>
    )
  }

  return { isValidate, getFormMap }
}

export default CustomForm
