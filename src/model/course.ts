import {Teacher} from './teacher';

export class Course {
    // _id: string;
    id: number;
    name: string;
    period: number;
    city: string;
    teacher: Teacher[] = [];
    // status: number;
}
