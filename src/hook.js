import { useContext } from 'react';
import Context from './context';
import { createError } from './utilities';

export default function useReactContext() {
    const context = useContext(Context);

    if (context === undefined) throw createError('useReactContext');

    return context;
}
