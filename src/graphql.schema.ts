
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract findOneById(id: number): Cat | Promise<Cat>;

    abstract custom(): CustomModuleVO | Promise<CustomModuleVO>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}

export class CustomModuleVO {
    a: string;
    b: string;
}
