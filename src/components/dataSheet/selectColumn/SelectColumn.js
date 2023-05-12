export const styleSelect = (active, focus) => {
    return {
        menuPortal: (base) => ({...base, zIndex: 9999}),
        container: (provided) => (Object.assign(Object.assign({}, provided), {flex: 1, alignSelf: 'stretch', pointerEvents: focus ? undefined : 'none'})),
        control: (provided) => (Object.assign(Object.assign({}, provided), {height: '100%', border: 'none', boxShadow: 'none', background: 'none'})),
        indicatorSeparator: (provided) => (Object.assign(Object.assign({}, provided), {opacity: 0})),
        indicatorsContainer: (provided) => (Object.assign(Object.assign({}, provided), {opacity: active ? 1 : 0})),
        placeholder: (provided) => (Object.assign(Object.assign({}, provided), {opacity: active ? 1 : 0})),
    }
}