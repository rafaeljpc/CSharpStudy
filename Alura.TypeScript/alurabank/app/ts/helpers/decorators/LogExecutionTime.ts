export function LogExecutionTime(customMsg: string = '') {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {            
            console.log(`---------------${customMsg}`);
            console.log(`Chamando ${propertyKey}(${JSON.stringify(args)})`);
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}.return = ${JSON.stringify(result)} in ${(t2 - t1).toFixed(6)} ms`);
            return result;
        }
    }
}