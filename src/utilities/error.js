export default function createError(source) {
    return new Error(
        `Unknown Context, ${source} must be use within a Provider.`,
    );
}
