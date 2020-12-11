const { error: consoleError } = console;

export const ERROR_MESSAGES = /Invalid prop|Failed prop type|Failed test type|Unknown Context/gi;

export function error(message, ...args) {
    if (/The above error occurred in the/gi.test(message)) return;

    if (ERROR_MESSAGES.test(message)) {
        throw new Error(message);
    }

    consoleError.apply(console, [message, ...args]);
}

Object.assign(console, { error });
