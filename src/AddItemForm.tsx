import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField, IconButton} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";

type AddItemFormType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }
    const addTask = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('');
        } else {
            setError('Title is required')
        }
    }

    return <div>
        <TextField value={title}
                   label={'Type value'}
                   variant={'outlined'}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   error={!!error}
                   helperText={error}
        />

        <IconButton onClick={addTask} color={"primary"}>
            <ControlPoint/>
        </IconButton>
    </div>
}

