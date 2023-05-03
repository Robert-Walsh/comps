import className from "classnames"

function Button({ 
    children, 
    primary, 
    secondary,
    success,
    warning,
    danger,
    outline, 
    rounded,
    ...rest
  }){

    const finalClassName = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-gray-500 border-gray-900 text-white': secondary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-yellow-500 border-yellow-400 text-white': warning,
        'bg-red-500 border-red-500 text-white': danger, 
        'rounded-full': rounded,
        'bg-white/100': outline,
        'text-blue-600': outline && primary,
        'text-gray-800': outline && secondary,
        'text-green-600': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-600': outline && danger
    });

    return <button {...rest} className={finalClassName}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if(count > 1){
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button