import { useState } from "react";
import { Input } from "../../components/form/Input";
import {
    validateNameTask,
    validateNameTaskMessage,
    validateState,
    validateStateMessage,
    validateDate,
    validateDateMessage,
    validateName,
    validateNameMessage,
    validateDescription,
    validateDescriptionMessage
} from "../../shared/validator";
import { useAddTask } from '../../shared/hooks'
import "bulma/css/bulma.min.css";

const inputs = [
    {
        field: 'nameTask',
        label: "Name Task",
        validationMessage: validateNameTaskMessage,
        type: 'text'
    }, {
        field: 'status',
        label: "Status",
        validationMessage: validateStateMessage,
        type: 'text'
    }, {
        field: 'dateBegin',
        label: "Date Begin",
        validationMessage: validateDateMessage,
        type: 'date'
    }, {
        field: 'dateEnd',
        label: "Date End",
        validationMessage: validateDateMessage,
        type: 'date'
    }, {
        field: 'nameUser',
        label: "Name User",
        validationMessage: validateNameMessage,
        type: 'text'
    }, {
        field: 'description',
        label: "Description",
        validationMessage: validateDescriptionMessage,
        type: 'textarea'
    },
]

export const AddTask = () => {
    const { addTask, isLoading } = useAddTask();
    const [formState, setFormState] = useState({
        nameTask: {
            value: '',
            isValid: false,
            showError: false
        },
        status: {
            value: '',
            isValid: false,
            showError: false
        },
        dateBegin: {
            value: '',
            isValid: false,
            showError: false
        },
        dateEnd: {
            value: '',
            isValid: false,
            showError: false
        },
        nameUser: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'nameTask':
                isValid = validateNameTask(value)
                break;
            case 'status':
                isValid = validateState(value)
                break;
            case 'dateBegin':
                isValid = validateDate(value)
                break;
            case 'dateEnd':
                isValid = validateDate(value)
                break;
            case 'nameUser':
                isValid = validateName(value)
                break;
            case 'description':
                isValid = validateDescription(value)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleAddTask = (event) => {
        event.preventDefault();
        addTask(formState.nameTask.value, formState.status.value,
            formState.dateBegin.value, formState.dateEnd.value,
            formState.nameUser.value, formState.description.value);
    }

    const isSubmitButtonDisabled = isLoading || !formState.nameTask.isValid 
    || !formState.status.isValid || !formState.dateBegin.isValid 
    || !formState.dateEnd.isValid || !formState.nameUser.isValid || !formState.description.isValid;

    return (
        <div className="container">
            <div className="column py-6">
                <form className="">
                    <Input
                        field={'nameTask'}
                        placeholder={'Name Task'}
                        label={'Name Task'}
                        value={formState.nameTask.value}
                        onChangeHandler={handleInputValueChange}
                        type={'text'}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErroMessage={formState.nameTask.showError}
                        validationMessage={validateNameTaskMessage}
                    />
                    <Input
                        field={'status'}
                        placeholder={'Status'}
                        label={'Status'}
                        value={formState.status.value}
                        onChangeHandler={handleInputValueChange}
                        type={'text'}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErroMessage={formState.status.showError}
                        validationMessage={validateStateMessage}
                    />
                    <Input
                        field={'dateBegin'}
                        label={'Date Begin'}
                        value={formState.dateBegin.value}
                        onChangeHandler={handleInputValueChange}
                        type={'date'}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErroMessage={formState.dateBegin.showError}
                        validationMessage={validateDateMessage}
                    />
                    <Input
                        field={'dateEnd'}
                        label={'Date End'}
                        value={formState.dateEnd.value}
                        onChangeHandler={handleInputValueChange}
                        type={'date'}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErroMessage={formState.dateEnd.showError}
                        validationMessage={validateDateMessage}
                    />
                    <Input
                        field={'nameUser'}
                        label={'Name User'}
                        placeholder={'Name user'}
                        value={formState.nameUser.value}
                        onChangeHandler={handleInputValueChange}
                        type={'text'}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErroMessage={formState.nameUser.showError}
                        validationMessage={validateNameMessage}
                    />
                    <Input
                        field={'description'}
                        placeholder={'Description'}
                        label={'Description'}
                        value={formState.description.value}
                        onChangeHandler={handleInputValueChange}
                        type={'textarea'}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErroMessage={formState.description.showError}
                        validationMessage={validateDescriptionMessage}
                    />
                    <button className="button is-success is-fullwidth " onClick={handleAddTask} disabled={isSubmitButtonDisabled}>AGREGAR</button>
                </form>

            </div>
        </div>
    )
}
