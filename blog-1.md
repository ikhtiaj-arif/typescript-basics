How Generics Enable Reusable, Strictly-Typed Code in TypeScript:

If you have written typescript code enough times, you probable have faced the issue when you want your code to be reusable but to also stay strictly typed. This is where generic type comes in.

## The Core Problem:

1. Write separate functions for each type change.
2. use any and lose type safety.

```ts
function identity(value: any) {
  return value;
}
```

## Using Generic:
Generic lets you capture the type and reuse it safely

```ts
function identity<T>(value: T): T {
  return value;
}
```

## The Power of generic:

1. Reusability with out duplication
   one function works for all types
2. Type safety stays intact
   no need to use any, no need to guess types. Just pass as argument and work without loosing type safety.
3. Stability
   Widely used in APIs, Hooks, Utilities and helpers for its stability

   ```ts
   function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
     return obj[key];
   }
   ```

it ensures only valid keys can be used
also returned type is always correct

## Mental Model:
 Think of generics like a placeholders or arguments of functions
    " I dont know what the type is, but I can keep the type safe .

## Summary:
 Generics lets you writ flexible safe reusable code at the same time, which is exactly what real world type script needs
```
