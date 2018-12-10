export function Throttle(millis = 500) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        let timer = 0;

        descriptor.value = function (...args: any[]) {
            if (event) 
                event.preventDefault();

            clearTimeout(timer);
            setTimeout(() => originalMethod.apply(this, args), millis);
        }

        return descriptor;
    }
}