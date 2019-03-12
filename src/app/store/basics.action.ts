import { Action } from '@ngrx/store';
import { Hobby } from '../models/hobby.model';

export const UPDATE = 'UPDATE';
export const ADD_HOBBY = 'ADD_HOBBY';

export class UpdateCounter implements Action {
    readonly type = UPDATE;

    constructor(public payload: number) {}
}

export class AddHobby implements Action {
    readonly type = ADD_HOBBY;

    constructor(public payload: Hobby) {}
}

export type basicsAction = UpdateCounter | AddHobby;