How OOP Pillars Help Manage Large TypeScript Codebases

## There are 4 pillars of OOP.

1. Encapsulation - hides complexity and mutability
   using the private modifier

   ```ts
   class BankAccount {
     private balance = 0;

     deposit(amount: number) {
       this.balance += amount;
     }

     getBalance() {
       return this.balance;
     }
   }
   ```

the child class do not have the direct access to balance

2. Inheritance - reusability. Core logics can be set to a global class and accessible

```ts
class Person {
  constructor(public name: string) {}
}

class Student extends Person {
  constructor(
    name: string,
    public grade: string,
  ) {
    super(name);
  }
}
```

all its instances and child classes will have access to person name

3. Abstraction - hiding unnecessary details
   You expose only what the user needs, not how it works.

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}
```

4. polymorphism - same same but different
   Different classes can behave differently but follow the same structure.

```ts
class CardPayment {
  pay(amount: number) {
    console.log("Paid by card");
  }
}

class CashPayment {
  pay(amount: number) {
    console.log("Paid by cash");
  }
}
```

## In real apps:
in large typescript projects
Encapsulation prevents bugs and data mutation
abstraction reduces complexity
inheritance avoids code duplication and repetition
polymorphism makes systems flexible

## mental model:
encapsulation - Private rooms inside a house
abstraction - TV remote
inheritance - Baper shompotti
polymorphism - One remote for different devices

## summary:
OOP is not about writing more classes
its about making code easier to read,write, scale and maintain
