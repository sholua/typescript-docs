interface Todo {
    title: string;
    description: string;
}

type Week = 'monday' | 'thuesday' | 'friday';

const  days: Record<Week, Todo> = {
    monday: {title: "test", description: "test"},
    thuesday: {title: "test", description: "test"},
    friday: {title: "test", description: "test"},
}