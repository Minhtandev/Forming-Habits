import { habits, progresses } from "../api";

const fakeHabitApi = (id) => setTimeout(() => {
    if (id) return habits
    return habits[id];
}, 500) 

const fakeProgressApi = (id) => setTimeout(() => {
    if (id) return progresses
    return progresses[id];
}, 500) 

export const getAllHabit = async (params, callback) => {
    const result = fakeHabitApi();
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const getOneHabit = async (id, params, callback) => {
    const result = fakeHabitApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const postHabit = async (id, params, callback) => {
    const result = fakeHabitApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const updateHabit = async (id, params, callback) => {
    const result = fakeHabitApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const deleteHabit = async (id, params, callback) => {
    const result = fakeHabitApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const getAllProgress = async (params, callback) => {
    const result = fakeProgressApi();
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const getOneProgress = async (id, params, callback) => {
    const result = fakeProgressApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const postProgress = async (id, params, callback) => {
    const result = fakeProgressApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const updateProgress = async (id, params, callback) => {
    const result = fakeProgressApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}

export const deleteProgress = async (id, params, callback) => {
    const result = fakeProgressApi(id);
    if (typeof callback === 'function') {
        callback(result);
    }
}