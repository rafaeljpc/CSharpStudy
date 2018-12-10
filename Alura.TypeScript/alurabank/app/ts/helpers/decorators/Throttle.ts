export function Throttle(millis = 500) {
    let timer = 0;
    
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (event) 
                event.preventDefault();

            clearInterval(timer);
            setTimeout(() => originalMethod.apply(this, args), millis);
        }

        return descriptor;
    }
}