export const rotateDown = {
    closed: {
        rotate: 0,
    },
    opened: {
        rotate: 45,
    },
}
export const rotateUp = {
    closed: {
        rotate: 0,
    },
    opened: {
        rotate: -45,
    },
}

export const VarList = {
    closed: {
        x: "100vw",
    },
    opened: {
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
}

export const VarListItem = {
    closed: {
        x: -10,
        opacity: 0,
    },
    opened: {
        x: 0,
        opacity: 1,
    },
};